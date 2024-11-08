using UnityEngine;
using UnityEngine.EventSystems;

namespace ScratchCardAsset.Tools
{
	public class EventSystemHelper : MonoBehaviour
	{
		[SerializeField]
		private EventSystem eventSystem;

		private void Awake()
		{
		}

		private void OnValidate()
		{
			if (eventSystem == null)
			{
				TryGetComponent<EventSystem>(out eventSystem);
			}
		}
	}
}
