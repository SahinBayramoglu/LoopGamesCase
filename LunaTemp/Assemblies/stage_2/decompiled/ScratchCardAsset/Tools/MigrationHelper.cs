using System.Reflection;
using UnityEngine;
using UnityEngine.UI;

namespace ScratchCardAsset.Tools
{
	public class MigrationHelper
	{
		private Object migratedObject;

		public void StartMigrate(ScratchCardManager scratchCardManager)
		{
			if (scratchCardManager == null)
			{
				return;
			}
			bool result = false;
			if (scratchCardManager.MeshRendererCard == null)
			{
				FieldInfo field3 = scratchCardManager.GetType().GetField("MeshCard");
				object meshCardValue = field3.GetValue(scratchCardManager);
				if (meshCardValue != null)
				{
					GameObject meshCardGameObject = (GameObject)meshCardValue;
					if (meshCardGameObject != null && meshCardGameObject.TryGetComponent<MeshRenderer>(out var meshRenderer))
					{
						scratchCardManager.MeshRendererCard = meshRenderer;
						field3.SetValue(scratchCardManager, null);
						result = true;
					}
				}
			}
			if (scratchCardManager.SpriteRendererCard == null)
			{
				FieldInfo field2 = scratchCardManager.GetType().GetField("SpriteCard");
				object spriteCardValue = field2.GetValue(scratchCardManager);
				if (spriteCardValue != null)
				{
					GameObject spriteCardGameObject = (GameObject)spriteCardValue;
					if (spriteCardGameObject != null && spriteCardGameObject.TryGetComponent<SpriteRenderer>(out var spriteRenderer))
					{
						scratchCardManager.SpriteRendererCard = spriteRenderer;
						field2.SetValue(scratchCardManager, null);
						result = true;
					}
				}
			}
			if (scratchCardManager.CanvasRendererCard == null)
			{
				FieldInfo field = scratchCardManager.GetType().GetField("ImageCard");
				object imageCardValue = field.GetValue(scratchCardManager);
				if (imageCardValue != null)
				{
					GameObject imageCardGameObject = (GameObject)imageCardValue;
					if (imageCardGameObject != null && imageCardGameObject.TryGetComponent<Image>(out var image))
					{
						scratchCardManager.CanvasRendererCard = image;
						field.SetValue(scratchCardManager, null);
						result = true;
					}
				}
			}
			if (result)
			{
				migratedObject = scratchCardManager;
				Debug.Log($"The migration for {scratchCardManager} was successful!", scratchCardManager);
			}
		}

		public void FinishMigrate()
		{
			if (migratedObject != null)
			{
				MarkAsDirty(migratedObject);
				migratedObject = null;
			}
		}

		private void MarkAsDirty(Object unityObject)
		{
		}
	}
}
