using System;
using UnityEngine;

namespace ScratchCardAsset.Core.InputData
{
	public class ScratchCardInput
	{
		public delegate Vector2 ScratchHandler(Vector2 position);

		public bool CheckCanvasRaycasts;

		public bool UsePressure;

		private readonly Func<bool> isScratched;

		private RaycastController raycastController;

		private ScratchCardInputData[] startInputData;

		private ScratchCardInputData[] endInputData;

		private Vector2?[] previousScratchPosition;

		private Vector2 scratchPosition;

		private bool[] isScratching;

		private bool[] isStartPosition;

		private const int MaxTouchCount = 10;

		private const int ReserveTouchCount = 1;

		public bool IsScratching
		{
			get
			{
				if (isScratching != null)
				{
					bool[] array = isScratching;
					for (int i = 0; i < array.Length; i++)
					{
						if (array[i])
						{
							return true;
						}
					}
				}
				return false;
			}
		}

		public event ScratchHandler OnScratch;

		public event Action<Vector2, float> OnScratchHole;

		public event Action<ScratchCardInputData> OnScratchHoleExtended;

		public event Action<Vector2, float, Vector2, float> OnScratchLine;

		public event Action<ScratchCardInputData, ScratchCardInputData> OnScratchLineExtended;

		public ScratchCardInput(Func<bool> scratched)
		{
			isScratched = scratched;
			isScratching = new bool[11];
			isStartPosition = new bool[11];
			startInputData = new ScratchCardInputData[11];
			endInputData = new ScratchCardInputData[11];
			previousScratchPosition = new Vector2?[11];
			for (int i = 0; i < isStartPosition.Length; i++)
			{
				isStartPosition[i] = true;
			}
		}

		public void InitRaycastsController(GameObject surfaceObject, Canvas[] canvases)
		{
			raycastController = new RaycastController(surfaceObject, canvases);
		}

		public bool TryUpdate()
		{
			Scratch();
			return IsScratching;
		}

		private void SetInputData(int fingerId, Vector2 position, float pressure = 1f)
		{
			if (isScratching[fingerId] || !CheckCanvasRaycasts || raycastController == null || !raycastController.IsBlock(position))
			{
				if (this.OnScratch != null)
				{
					scratchPosition = this.OnScratch(position);
				}
				if (isStartPosition[fingerId])
				{
					startInputData[fingerId].Position = scratchPosition;
					startInputData[fingerId].Pressure = pressure;
					startInputData[fingerId].Time = Time.time;
					endInputData[fingerId] = startInputData[fingerId];
					isStartPosition[fingerId] = !isStartPosition[fingerId];
				}
				else
				{
					startInputData[fingerId] = endInputData[fingerId];
					endInputData[fingerId].Position = scratchPosition;
					endInputData[fingerId].Pressure = pressure;
					endInputData[fingerId].Time = Time.time;
				}
				if (!isScratching[fingerId])
				{
					endInputData[fingerId] = startInputData[fingerId];
					isScratching[fingerId] = true;
				}
			}
		}

		private void Scratch()
		{
			for (int i = 0; i < isScratching.Length; i++)
			{
				if (!isScratching[i])
				{
					continue;
				}
				if (startInputData[i].Position == endInputData[i].Position)
				{
					this.OnScratchHole?.Invoke(endInputData[i].Position, endInputData[i].Pressure);
					if (isScratched != null && isScratched())
					{
						this.OnScratchHoleExtended?.Invoke(endInputData[i]);
					}
				}
				else
				{
					this.OnScratchLine?.Invoke(startInputData[i].Position, startInputData[i].Pressure, endInputData[i].Position, endInputData[i].Pressure);
					if (isScratched != null && isScratched())
					{
						this.OnScratchLineExtended?.Invoke(startInputData[i], endInputData[i]);
					}
				}
			}
		}

		public void Scratch(int index, Vector2 screenPosition)
		{
			isScratching[index] = false;
			isStartPosition[index] = true;
			SetInputData(index, screenPosition);
		}

		public void ResetData()
		{
			for (int i = 0; i < isScratching.Length; i++)
			{
				isScratching[i] = false;
				isStartPosition[i] = true;
				previousScratchPosition[i] = null;
			}
		}
	}
}
