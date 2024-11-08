using UnityEngine;

public class FenceGenerator : MonoBehaviour
{
    public GameObject cornerFence;
    public GameObject verticalFence;
    public GameObject horizontalFence;
    private GameObject fenceParent;


    public void GenerateFences(int mapWidth, int mapHeight)
    {
        fenceParent ??= new GameObject("FenceTiles");
        float leftX = -mapWidth / 2f + 0.5f;
        float rightX = mapWidth / 2f - 0.5f;
        float topY = mapHeight / 2f - 0.5f;
        float bottomY = -mapHeight / 2f + 0.5f;

        PlaceCornerFences(leftX, rightX, topY, bottomY);
        PlaceVerticalFences(leftX, rightX, topY, bottomY);
        PlaceHorizontalFences(leftX, rightX, topY, bottomY);
    }

    void PlaceCornerFences(float leftX, float rightX, float topY, float bottomY)
    {

        Vector3 topLeftPosition = new Vector3(leftX, topY, 0);
        GameObject topLeftFence = Instantiate(cornerFence, topLeftPosition, Quaternion.identity);
        topLeftFence.transform.parent = fenceParent.transform;


        Vector3 topRightPosition = new Vector3(rightX, topY, 0);
        GameObject topRightFence = Instantiate(cornerFence, topRightPosition, Quaternion.identity);
        topRightFence.transform.parent = fenceParent.transform;


        Vector3 bottomLeftPosition = new Vector3(leftX, bottomY, 0);
        GameObject bottomLeftFence = Instantiate(cornerFence, bottomLeftPosition, Quaternion.identity);
        bottomLeftFence.transform.parent = fenceParent.transform;


        Vector3 bottomRightPosition = new Vector3(rightX, bottomY, 0);
        GameObject bottomRightFence = Instantiate(cornerFence, bottomRightPosition, Quaternion.identity);
        bottomRightFence.transform.parent = fenceParent.transform;
    }

    void PlaceVerticalFences(float leftX, float rightX, float topY, float bottomY)
    {

        for (float y = topY - 1f; y > bottomY; y -= 2f)
        {
            Vector3 leftPositionFence2 = new Vector3(leftX, y + 0.25f, 0);
            GameObject leftFence2 = Instantiate(verticalFence, leftPositionFence2, Quaternion.identity);
            leftFence2.transform.parent = fenceParent.transform;

            Vector3 leftPositionFence1 = new Vector3(leftX, y - 1f, 0);
            GameObject leftFence1 = Instantiate(cornerFence, leftPositionFence1, Quaternion.identity);
            leftFence1.transform.parent = fenceParent.transform;
        }


        for (float y = topY - 1f; y > bottomY; y -= 2f)
        {
            Vector3 rightPositionFence2 = new Vector3(rightX, y + 0.25f, 0);
            GameObject rightFence2 = Instantiate(verticalFence, rightPositionFence2, Quaternion.identity);
            rightFence2.transform.parent = fenceParent.transform;

            Vector3 rightPositionFence1 = new Vector3(rightX, y - 1f, 0);
            GameObject rightFence1 = Instantiate(cornerFence, rightPositionFence1, Quaternion.identity);
            rightFence1.transform.parent = fenceParent.transform;
        }
    }

    void PlaceHorizontalFences(float leftX, float rightX, float topY, float bottomY)
    {

        for (float x = leftX + 1f; x < rightX; x += 2f)
        {
            Vector3 topPositionFence3 = new Vector3(x, topY, 0);
            GameObject topFence3 = Instantiate(horizontalFence, topPositionFence3, Quaternion.identity);
            topFence3.transform.parent = fenceParent.transform;

            Vector3 topPositionFence1 = new Vector3(x + 1f, topY, 0);
            GameObject topFence1 = Instantiate(cornerFence, topPositionFence1, Quaternion.identity);
            topFence1.transform.parent = fenceParent.transform;
        }


        for (float x = leftX + 1f; x < rightX; x += 2f)
        {
            Vector3 bottomPositionFence3 = new Vector3(x, bottomY, 0);
            GameObject bottomFence3 = Instantiate(horizontalFence, bottomPositionFence3, Quaternion.identity);
            bottomFence3.transform.parent = fenceParent.transform;

            Vector3 bottomPositionFence1 = new Vector3(x + 1f, bottomY, 0);
            GameObject bottomFence1 = Instantiate(cornerFence, bottomPositionFence1, Quaternion.identity);
            bottomFence1.transform.parent = fenceParent.transform;
        }
    }
}
