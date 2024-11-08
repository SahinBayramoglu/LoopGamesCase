using UnityEngine;

public class FenceGenerator : MonoBehaviour
{
	public GameObject cornerFence;

	public GameObject verticalFence;

	public GameObject horizontalFence;

	private GameObject fenceParent;

	private void Start()
	{
	}

	public void GenerateFences(int mapWidth, int mapHeight)
	{
		if ((object)fenceParent == null)
		{
			fenceParent = new GameObject("FenceTiles");
		}
		float leftX = (float)(-mapWidth) / 2f + 0.5f;
		float rightX = (float)mapWidth / 2f - 0.5f;
		float topY = (float)mapHeight / 2f - 0.5f;
		float bottomY = (float)(-mapHeight) / 2f + 0.5f;
		PlaceCornerFences(leftX, rightX, topY, bottomY);
		PlaceVerticalFences(leftX, rightX, topY, bottomY);
		PlaceHorizontalFences(leftX, rightX, topY, bottomY);
	}

	private void PlaceCornerFences(float leftX, float rightX, float topY, float bottomY)
	{
		Vector3 topLeftPosition = new Vector3(leftX, topY, 0f);
		GameObject topLeftFence = Object.Instantiate(cornerFence, topLeftPosition, Quaternion.identity);
		topLeftFence.transform.parent = fenceParent.transform;
		Vector3 topRightPosition = new Vector3(rightX, topY, 0f);
		GameObject topRightFence = Object.Instantiate(cornerFence, topRightPosition, Quaternion.identity);
		topRightFence.transform.parent = fenceParent.transform;
		Vector3 bottomLeftPosition = new Vector3(leftX, bottomY, 0f);
		GameObject bottomLeftFence = Object.Instantiate(cornerFence, bottomLeftPosition, Quaternion.identity);
		bottomLeftFence.transform.parent = fenceParent.transform;
		Vector3 bottomRightPosition = new Vector3(rightX, bottomY, 0f);
		GameObject bottomRightFence = Object.Instantiate(cornerFence, bottomRightPosition, Quaternion.identity);
		bottomRightFence.transform.parent = fenceParent.transform;
	}

	private void PlaceVerticalFences(float leftX, float rightX, float topY, float bottomY)
	{
		for (float y2 = topY - 1f; y2 > bottomY; y2 -= 2f)
		{
			Vector3 leftPositionFence2 = new Vector3(leftX, y2 + 0.25f, 0f);
			GameObject leftFence2 = Object.Instantiate(verticalFence, leftPositionFence2, Quaternion.identity);
			leftFence2.transform.parent = fenceParent.transform;
			Vector3 leftPositionFence1 = new Vector3(leftX, y2 - 1f, 0f);
			GameObject leftFence1 = Object.Instantiate(cornerFence, leftPositionFence1, Quaternion.identity);
			leftFence1.transform.parent = fenceParent.transform;
		}
		for (float y = topY - 1f; y > bottomY; y -= 2f)
		{
			Vector3 rightPositionFence2 = new Vector3(rightX, y + 0.25f, 0f);
			GameObject rightFence2 = Object.Instantiate(verticalFence, rightPositionFence2, Quaternion.identity);
			rightFence2.transform.parent = fenceParent.transform;
			Vector3 rightPositionFence1 = new Vector3(rightX, y - 1f, 0f);
			GameObject rightFence1 = Object.Instantiate(cornerFence, rightPositionFence1, Quaternion.identity);
			rightFence1.transform.parent = fenceParent.transform;
		}
	}

	private void PlaceHorizontalFences(float leftX, float rightX, float topY, float bottomY)
	{
		for (float x2 = leftX + 1f; x2 < rightX; x2 += 2f)
		{
			Vector3 topPositionFence2 = new Vector3(x2, topY, 0f);
			GameObject topFence2 = Object.Instantiate(horizontalFence, topPositionFence2, Quaternion.identity);
			topFence2.transform.parent = fenceParent.transform;
			Vector3 topPositionFence1 = new Vector3(x2 + 1f, topY, 0f);
			GameObject topFence1 = Object.Instantiate(cornerFence, topPositionFence1, Quaternion.identity);
			topFence1.transform.parent = fenceParent.transform;
		}
		for (float x = leftX + 1f; x < rightX; x += 2f)
		{
			Vector3 bottomPositionFence2 = new Vector3(x, bottomY, 0f);
			GameObject bottomFence2 = Object.Instantiate(horizontalFence, bottomPositionFence2, Quaternion.identity);
			bottomFence2.transform.parent = fenceParent.transform;
			Vector3 bottomPositionFence1 = new Vector3(x + 1f, bottomY, 0f);
			GameObject bottomFence1 = Object.Instantiate(cornerFence, bottomPositionFence1, Quaternion.identity);
			bottomFence1.transform.parent = fenceParent.transform;
		}
	}
}
