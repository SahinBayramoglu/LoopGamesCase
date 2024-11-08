using System.Collections;
using UnityEngine;

namespace ScratchCardAsset.Demo
{
	public class CursorSprite : MonoBehaviour
	{
		[SerializeField]
		private SpriteRenderer cursorSpriteRenderer;

		public SpriteRenderer SpriteRenderer => cursorSpriteRenderer;

		public void Show()
		{
			StopAllCoroutines();
			cursorSpriteRenderer.color = Color.white;
		}

		public void Hide()
		{
			if (base.gameObject.activeInHierarchy)
			{
				StartCoroutine(HideCursor());
			}
		}

		private IEnumerator HideCursor()
		{
			float alpha = cursorSpriteRenderer.color.a;
			while (cursorSpriteRenderer.color.a > 0f)
			{
				alpha -= Time.deltaTime * 5f;
				cursorSpriteRenderer.color = new Color(1f, 1f, 1f, alpha);
				yield return null;
			}
			cursorSpriteRenderer.color = Color.clear;
			base.gameObject.SetActive(false);
		}
	}
}
