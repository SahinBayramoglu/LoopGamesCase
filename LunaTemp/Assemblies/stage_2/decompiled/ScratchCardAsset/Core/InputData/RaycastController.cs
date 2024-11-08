using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace ScratchCardAsset.Core.InputData
{
	public class RaycastController
	{
		private GameObject scratchSurface;

		private List<CanvasGraphicRaycaster> raycasters;

		public RaycastController(GameObject surfaceObject, Canvas[] canvasesForRaycastsBlocking)
		{
			scratchSurface = surfaceObject;
			raycasters = new List<CanvasGraphicRaycaster>();
			if (surfaceObject.TryGetComponent<Image>(out var image) && image.canvas != null)
			{
				if (!image.canvas.TryGetComponent<CanvasGraphicRaycaster>(out var raycaster2))
				{
					raycaster2 = image.canvas.gameObject.AddComponent<CanvasGraphicRaycaster>();
				}
				if (raycaster2 != null)
				{
					raycasters.Add(raycaster2);
				}
			}
			if (canvasesForRaycastsBlocking == null)
			{
				return;
			}
			foreach (Canvas canvas in canvasesForRaycastsBlocking)
			{
				if (canvas != null)
				{
					if (!canvas.TryGetComponent<CanvasGraphicRaycaster>(out var raycaster))
					{
						raycaster = canvas.gameObject.AddComponent<CanvasGraphicRaycaster>();
					}
					if (raycaster != null)
					{
						raycasters.Add(raycaster);
					}
				}
			}
		}

		public bool IsBlock(Vector3 position)
		{
			bool isBlock = false;
			foreach (CanvasGraphicRaycaster raycaster in raycasters)
			{
				if (!(raycaster == null))
				{
					List<RaycastResult> result = raycaster.GetRaycasts(position);
					if (result.Count != 0 && (result.Count <= 0 || !(result[0].gameObject == scratchSurface)))
					{
						isBlock = true;
						break;
					}
				}
			}
			return isBlock;
		}
	}
}
