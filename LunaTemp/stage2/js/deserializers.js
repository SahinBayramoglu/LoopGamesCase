var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSpring' )
  var i483 = data
  i482.spring = i483[0]
  i482.damper = i483[1]
  i482.targetPosition = i483[2]
  return i482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointMotor' )
  var i485 = data
  i484.m_TargetVelocity = i485[0]
  i484.m_Force = i485[1]
  i484.m_FreeSpin = i485[2]
  return i484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointLimits' )
  var i487 = data
  i486.m_Min = i487[0]
  i486.m_Max = i487[1]
  i486.m_Bounciness = i487[2]
  i486.m_BounceMinVelocity = i487[3]
  i486.m_ContactDistance = i487[4]
  i486.minBounce = i487[5]
  i486.maxBounce = i487[6]
  return i486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointDrive' )
  var i489 = data
  i488.m_PositionSpring = i489[0]
  i488.m_PositionDamper = i489[1]
  i488.m_MaximumForce = i489[2]
  i488.m_UseAcceleration = i489[3]
  return i488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i491 = data
  i490.m_Spring = i491[0]
  i490.m_Damper = i491[1]
  return i490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i493 = data
  i492.m_Limit = i493[0]
  i492.m_Bounciness = i493[1]
  i492.m_ContactDistance = i493[2]
  return i492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i495 = data
  i494.m_ExtremumSlip = i495[0]
  i494.m_ExtremumValue = i495[1]
  i494.m_AsymptoteSlip = i495[2]
  i494.m_AsymptoteValue = i495[3]
  i494.m_Stiffness = i495[4]
  return i494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i497 = data
  i496.m_LowerAngle = i497[0]
  i496.m_UpperAngle = i497[1]
  return i496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i499 = data
  i498.m_MotorSpeed = i499[0]
  i498.m_MaximumMotorTorque = i499[1]
  return i498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i501 = data
  i500.m_DampingRatio = i501[0]
  i500.m_Frequency = i501[1]
  i500.m_Angle = i501[2]
  return i500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i503 = data
  i502.m_LowerTranslation = i503[0]
  i502.m_UpperTranslation = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i505 = data
  i504.position = new pc.Vec3( i505[0], i505[1], i505[2] )
  i504.scale = new pc.Vec3( i505[3], i505[4], i505[5] )
  i504.rotation = new pc.Quat(i505[6], i505[7], i505[8], i505[9])
  return i504
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i506 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'Card')
  request.r(i507[2], i507[3], 0, i506, 'Progress')
  i506.RenderType = i507[4]
  request.r(i507[5], i507[6], 0, i506, 'MeshCard')
  request.r(i507[7], i507[8], 0, i506, 'SpriteCard')
  request.r(i507[9], i507[10], 0, i506, 'ImageCard')
  request.r(i507[11], i507[12], 0, i506, 'meshRendererCard')
  request.r(i507[13], i507[14], 0, i506, 'spriteRendererCard')
  request.r(i507[15], i507[16], 0, i506, 'canvasRendererCard')
  i506.scratchSurfaceSpriteHasAlpha = !!i507[17]
  i506.mode = i507[18]
  request.r(i507[19], i507[20], 0, i506, 'mainCamera')
  request.r(i507[21], i507[22], 0, i506, 'scratchSurfaceSprite')
  i506.progressAccuracy = i507[23]
  request.r(i507[24], i507[25], 0, i506, 'brushTexture')
  i506.brushSize = i507[26]
  i506.brushOpacity = i507[27]
  i506.inputEnabled = !!i507[28]
  i506.usePressure = !!i507[29]
  i506.checkCanvasRaycasts = !!i507[30]
  var i509 = i507[31]
  var i508 = []
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 2, i508, '')
  }
  i506.canvasesForRaycastsBlocking = i508
  request.r(i507[32], i507[33], 0, i506, 'maskShader')
  request.r(i507[34], i507[35], 0, i506, 'brushShader')
  request.r(i507[36], i507[37], 0, i506, 'maskProgressShader')
  return i506
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i512 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'SurfaceTransform')
  request.r(i513[2], i513[3], 0, i512, 'SurfaceMaterial')
  request.r(i513[4], i513[5], 0, i512, 'BrushMaterial')
  i512.BrushSize = i513[6]
  i512.RenderTextureQuality = i513[7]
  i512.mode = i513[8]
  return i512
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i514 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'card')
  request.r(i515[2], i515[3], 0, i514, 'progressMaterial')
  i514.sampleSourceTexture = !!i515[4]
  i514.progressAccuracy = i515[5]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i517 = data
  i516.name = i517[0]
  i516.tagId = i517[1]
  i516.enabled = !!i517[2]
  i516.isStatic = !!i517[3]
  i516.layer = i517[4]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'additionalVertexStreams')
  i518.enabled = !!i519[2]
  request.r(i519[3], i519[4], 0, i518, 'sharedMaterial')
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 2, i520, '')
  }
  i518.sharedMaterials = i520
  i518.receiveShadows = !!i519[6]
  i518.shadowCastingMode = i519[7]
  i518.sortingLayerID = i519[8]
  i518.sortingOrder = i519[9]
  i518.lightmapIndex = i519[10]
  i518.lightmapSceneIndex = i519[11]
  i518.lightmapScaleOffset = new pc.Vec4( i519[12], i519[13], i519[14], i519[15] )
  i518.lightProbeUsage = i519[16]
  i518.reflectionProbeUsage = i519[17]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'sharedMesh')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i527 = data
  i526.enabled = !!i527[0]
  request.r(i527[1], i527[2], 0, i526, 'sharedMaterial')
  var i529 = i527[3]
  var i528 = []
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 2, i528, '')
  }
  i526.sharedMaterials = i528
  i526.receiveShadows = !!i527[4]
  i526.shadowCastingMode = i527[5]
  i526.sortingLayerID = i527[6]
  i526.sortingOrder = i527[7]
  i526.lightmapIndex = i527[8]
  i526.lightmapSceneIndex = i527[9]
  i526.lightmapScaleOffset = new pc.Vec4( i527[10], i527[11], i527[12], i527[13] )
  i526.lightProbeUsage = i527[14]
  i526.reflectionProbeUsage = i527[15]
  i526.color = new pc.Color(i527[16], i527[17], i527[18], i527[19])
  request.r(i527[20], i527[21], 0, i526, 'sprite')
  i526.flipX = !!i527[22]
  i526.flipY = !!i527[23]
  i526.drawMode = i527[24]
  i526.size = new pc.Vec2( i527[25], i527[26] )
  i526.tileMode = i527[27]
  i526.adaptiveModeThreshold = i527[28]
  i526.maskInteraction = i527[29]
  i526.spriteSortPoint = i527[30]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i531 = data
  i530.name = i531[0]
  i530.halfPrecision = !!i531[1]
  i530.useUInt32IndexFormat = !!i531[2]
  i530.vertexCount = i531[3]
  i530.aabb = i531[4]
  var i533 = i531[5]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( !!i533[i + 0] );
  }
  i530.streams = i532
  i530.vertices = i531[6]
  var i535 = i531[7]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i535[i + 0]) );
  }
  i530.subMeshes = i534
  var i537 = i531[8]
  var i536 = []
  for(var i = 0; i < i537.length; i += 16) {
    i536.push( new pc.Mat4().setData(i537[i + 0], i537[i + 1], i537[i + 2], i537[i + 3],  i537[i + 4], i537[i + 5], i537[i + 6], i537[i + 7],  i537[i + 8], i537[i + 9], i537[i + 10], i537[i + 11],  i537[i + 12], i537[i + 13], i537[i + 14], i537[i + 15]) );
  }
  i530.bindposes = i536
  var i539 = i531[9]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i539[i + 0]) );
  }
  i530.blendShapes = i538
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i545 = data
  i544.triangles = i545[0]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i551 = data
  i550.name = i551[0]
  var i553 = i551[1]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i553[i + 0]) );
  }
  i550.frames = i552
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i555 = data
  i554.name = i555[0]
  i554.width = i555[1]
  i554.height = i555[2]
  i554.mipmapCount = i555[3]
  i554.anisoLevel = i555[4]
  i554.filterMode = i555[5]
  i554.hdr = !!i555[6]
  i554.format = i555[7]
  i554.wrapMode = i555[8]
  i554.alphaIsTransparency = !!i555[9]
  i554.alphaSource = i555[10]
  i554.graphicsFormat = i555[11]
  i554.sRGBTexture = !!i555[12]
  i554.desiredColorSpace = i555[13]
  i554.wrapU = i555[14]
  i554.wrapV = i555[15]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i556 = root || new pc.UnityMaterial()
  var i557 = data
  i556.name = i557[0]
  request.r(i557[1], i557[2], 0, i556, 'shader')
  i556.renderQueue = i557[3]
  i556.enableInstancing = !!i557[4]
  var i559 = i557[5]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i559[i + 0]) );
  }
  i556.floatParameters = i558
  var i561 = i557[6]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i561[i + 0]) );
  }
  i556.colorParameters = i560
  var i563 = i557[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i563[i + 0]) );
  }
  i556.vectorParameters = i562
  var i565 = i557[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i565[i + 0]) );
  }
  i556.textureParameters = i564
  var i567 = i557[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i567[i + 0]) );
  }
  i556.materialFlags = i566
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = new pc.Color(i575[1], i575[2], i575[3], i575[4])
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = new pc.Vec4( i579[1], i579[2], i579[3], i579[4] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i583 = data
  i582.name = i583[0]
  request.r(i583[1], i583[2], 0, i582, 'value')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i587 = data
  i586.name = i587[0]
  i586.enabled = !!i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i589 = data
  i588.usedByComposite = !!i589[0]
  i588.autoTiling = !!i589[1]
  i588.size = new pc.Vec2( i589[2], i589[3] )
  i588.edgeRadius = i589[4]
  i588.enabled = !!i589[5]
  i588.isTrigger = !!i589[6]
  i588.usedByEffector = !!i589[7]
  i588.density = i589[8]
  i588.offset = new pc.Vec2( i589[9], i589[10] )
  request.r(i589[11], i589[12], 0, i588, 'material')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i591 = data
  i590.bodyType = i591[0]
  request.r(i591[1], i591[2], 0, i590, 'material')
  i590.simulated = !!i591[3]
  i590.useAutoMass = !!i591[4]
  i590.mass = i591[5]
  i590.drag = i591[6]
  i590.angularDrag = i591[7]
  i590.gravityScale = i591[8]
  i590.collisionDetectionMode = i591[9]
  i590.sleepMode = i591[10]
  i590.constraints = i591[11]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i593 = data
  i592.radius = i593[0]
  i592.enabled = !!i593[1]
  i592.isTrigger = !!i593[2]
  i592.usedByEffector = !!i593[3]
  i592.density = i593[4]
  i592.offset = new pc.Vec2( i593[5], i593[6] )
  request.r(i593[7], i593[8], 0, i592, 'material')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'animatorController')
  request.r(i595[2], i595[3], 0, i594, 'avatar')
  i594.updateMode = i595[4]
  i594.hasTransformHierarchy = !!i595[5]
  i594.applyRootMotion = !!i595[6]
  var i597 = i595[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.humanBones = i596
  i594.enabled = !!i595[8]
  return i594
}

Deserializers["Sword"] = function (request, data, root) {
  var i600 = root || request.c( 'Sword' )
  var i601 = data
  i600.isAttackActive = !!i601[0]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i603 = data
  i602.name = i603[0]
  i602.index = i603[1]
  i602.startup = !!i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.aspect = i605[1]
  i604.orthographic = !!i605[2]
  i604.orthographicSize = i605[3]
  i604.backgroundColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.nearClipPlane = i605[8]
  i604.farClipPlane = i605[9]
  i604.fieldOfView = i605[10]
  i604.depth = i605[11]
  i604.clearFlags = i605[12]
  i604.cullingMask = i605[13]
  i604.rect = i605[14]
  request.r(i605[15], i605[16], 0, i604, 'targetTexture')
  i604.usePhysicalProperties = !!i605[17]
  i604.focalLength = i605[18]
  i604.sensorSize = new pc.Vec2( i605[19], i605[20] )
  i604.lensShift = new pc.Vec2( i605[21], i605[22] )
  i604.gateFit = i605[23]
  return i604
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i607 = data
  i606.m_RenderShadows = !!i607[0]
  i606.m_RequiresDepthTextureOption = i607[1]
  i606.m_RequiresOpaqueTextureOption = i607[2]
  i606.m_CameraType = i607[3]
  var i609 = i607[4]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.m_Cameras = i608
  i606.m_RendererIndex = i607[5]
  i606.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i607[6] )
  request.r(i607[7], i607[8], 0, i606, 'm_VolumeTrigger')
  i606.m_VolumeFrameworkUpdateModeOption = i607[9]
  i606.m_RenderPostProcessing = !!i607[10]
  i606.m_Antialiasing = i607[11]
  i606.m_AntialiasingQuality = i607[12]
  i606.m_StopNaN = !!i607[13]
  i606.m_Dithering = !!i607[14]
  i606.m_ClearDepth = !!i607[15]
  i606.m_AllowXRRendering = !!i607[16]
  i606.m_AllowHDROutput = !!i607[17]
  i606.m_UseScreenCoordOverride = !!i607[18]
  i606.m_ScreenSizeOverride = new pc.Vec4( i607[19], i607[20], i607[21], i607[22] )
  i606.m_ScreenCoordScaleBias = new pc.Vec4( i607[23], i607[24], i607[25], i607[26] )
  i606.m_RequiresDepthTexture = !!i607[27]
  i606.m_RequiresColorTexture = !!i607[28]
  i606.m_Version = i607[29]
  i606.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i607[30], i606.m_TaaSettings)
  return i606
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i613 = data
  i612.m_Quality = i613[0]
  i612.m_FrameInfluence = i613[1]
  i612.m_JitterScale = i613[2]
  i612.m_MipBias = i613[3]
  i612.m_VarianceClampScale = i613[4]
  i612.m_ContrastAdaptiveSharpening = i613[5]
  return i612
}

Deserializers["GameController"] = function (request, data, root) {
  var i614 = root || request.c( 'GameController' )
  var i615 = data
  i614.minItemsPerGroup = i615[0]
  i614.maxItemsPerGroup = i615[1]
  i614.numberOfGroups = i615[2]
  i614.groupRadius = i615[3]
  i614.cellSize = i615[4]
  i614.numberOfCollectables = i615[5]
  i614.mapWidth = i615[6]
  i614.mapHeight = i615[7]
  var i617 = i615[8]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 1, i616, '')
  }
  i614.cursorTransforms = i616
  request.r(i615[9], i615[10], 0, i614, 'cardManager')
  request.r(i615[11], i615[12], 0, i614, 'mapGenerator')
  request.r(i615[13], i615[14], 0, i614, 'fenceGenerator')
  request.r(i615[15], i615[16], 0, i614, 'collectableSword')
  return i614
}

Deserializers["MapGenerator"] = function (request, data, root) {
  var i620 = root || request.c( 'MapGenerator' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'groundTile')
  var i623 = i621[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.decorationTiles = i622
  return i620
}

Deserializers["FenceGenerator"] = function (request, data, root) {
  var i626 = root || request.c( 'FenceGenerator' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'cornerFence')
  request.r(i627[2], i627[3], 0, i626, 'verticalFence')
  request.r(i627[4], i627[5], 0, i626, 'horizontalFence')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i629 = data
  i628.pivot = new pc.Vec2( i629[0], i629[1] )
  i628.anchorMin = new pc.Vec2( i629[2], i629[3] )
  i628.anchorMax = new pc.Vec2( i629[4], i629[5] )
  i628.sizeDelta = new pc.Vec2( i629[6], i629[7] )
  i628.anchoredPosition3D = new pc.Vec3( i629[8], i629[9], i629[10] )
  i628.rotation = new pc.Quat(i629[11], i629[12], i629[13], i629[14])
  i628.scale = new pc.Vec3( i629[15], i629[16], i629[17] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i631 = data
  i630.enabled = !!i631[0]
  i630.planeDistance = i631[1]
  i630.referencePixelsPerUnit = i631[2]
  i630.isFallbackOverlay = !!i631[3]
  i630.renderMode = i631[4]
  i630.renderOrder = i631[5]
  i630.sortingLayerName = i631[6]
  i630.sortingOrder = i631[7]
  i630.scaleFactor = i631[8]
  request.r(i631[9], i631[10], 0, i630, 'worldCamera')
  i630.overrideSorting = !!i631[11]
  i630.pixelPerfect = !!i631[12]
  i630.targetDisplay = i631[13]
  i630.overridePixelPerfect = !!i631[14]
  return i630
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i633 = data
  i632.m_UiScaleMode = i633[0]
  i632.m_ReferencePixelsPerUnit = i633[1]
  i632.m_ScaleFactor = i633[2]
  i632.m_ReferenceResolution = new pc.Vec2( i633[3], i633[4] )
  i632.m_ScreenMatchMode = i633[5]
  i632.m_MatchWidthOrHeight = i633[6]
  i632.m_PhysicalUnit = i633[7]
  i632.m_FallbackScreenDPI = i633[8]
  i632.m_DefaultSpriteDPI = i633[9]
  i632.m_DynamicPixelsPerUnit = i633[10]
  i632.m_PresetInfoIsWorld = !!i633[11]
  return i632
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i635 = data
  i634.m_IgnoreReversedGraphics = !!i635[0]
  i634.m_BlockingObjects = i635[1]
  i634.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i635[2] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i637 = data
  i636.cullTransparentMesh = !!i637[0]
  return i636
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Image' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'm_Sprite')
  i638.m_Type = i639[2]
  i638.m_PreserveAspect = !!i639[3]
  i638.m_FillCenter = !!i639[4]
  i638.m_FillMethod = i639[5]
  i638.m_FillAmount = i639[6]
  i638.m_FillClockwise = !!i639[7]
  i638.m_FillOrigin = i639[8]
  i638.m_UseSpriteMesh = !!i639[9]
  i638.m_PixelsPerUnitMultiplier = i639[10]
  request.r(i639[11], i639[12], 0, i638, 'm_Material')
  i638.m_Maskable = !!i639[13]
  i638.m_Color = new pc.Color(i639[14], i639[15], i639[16], i639[17])
  i638.m_RaycastTarget = !!i639[18]
  i638.m_RaycastPadding = new pc.Vec4( i639[19], i639[20], i639[21], i639[22] )
  return i638
}

Deserializers["Joystick"] = function (request, data, root) {
  var i640 = root || request.c( 'Joystick' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'joystickBackground')
  request.r(i641[2], i641[3], 0, i640, 'joystickHandle')
  return i640
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_FirstSelected')
  i642.m_sendNavigationEvents = !!i643[2]
  i642.m_DragThreshold = i643[3]
  return i642
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i645 = data
  i644.m_HorizontalAxis = i645[0]
  i644.m_VerticalAxis = i645[1]
  i644.m_SubmitButton = i645[2]
  i644.m_CancelButton = i645[3]
  i644.m_InputActionsPerSecond = i645[4]
  i644.m_RepeatDelay = i645[5]
  i644.m_ForceModuleActive = !!i645[6]
  i644.m_SendPointerHoverToParent = !!i645[7]
  return i644
}

Deserializers["Player"] = function (request, data, root) {
  var i646 = root || request.c( 'Player' )
  var i647 = data
  i646.maxMovementSpeed = i647[0]
  i646.maxHealth = i647[1]
  i646.currentHealth = i647[2]
  request.r(i647[3], i647[4], 0, i646, 'weaponManager')
  request.r(i647[5], i647[6], 0, i646, 'rigidbody2D')
  request.r(i647[7], i647[8], 0, i646, 'dieParticle')
  request.r(i647[9], i647[10], 0, i646, 'bodyAnimator')
  request.r(i647[11], i647[12], 0, i646, 'bodySpriteRenderer')
  request.r(i647[13], i647[14], 0, i646, 'collider')
  request.r(i647[15], i647[16], 0, i646, 'CollectableSwordPrefab')
  i646.isTakeDamage = !!i647[17]
  i646.isDead = !!i647[18]
  request.r(i647[19], i647[20], 0, i646, 'joystick')
  i646.joystickDeadZone = i647[21]
  i646.centerFollowSpeed = i647[22]
  i646.smoothingFactor = i647[23]
  request.r(i647[24], i647[25], 0, i646, 'spriteRenderer')
  return i646
}

Deserializers["WeaponManager"] = function (request, data, root) {
  var i648 = root || request.c( 'WeaponManager' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'swordPrefab')
  request.r(i649[2], i649[3], 0, i648, 'character')
  i648.radius = i649[4]
  request.r(i649[5], i649[6], 0, i648, '_weaponGruopRotator')
  request.r(i649[7], i649[8], 0, i648, 'weaponParent')
  return i648
}

Deserializers["WeaponGruopRotator"] = function (request, data, root) {
  var i650 = root || request.c( 'WeaponGruopRotator' )
  var i651 = data
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i653 = data
  i652.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i653[0], i652.main)
  i652.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i653[1], i652.colorBySpeed)
  i652.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i653[2], i652.colorOverLifetime)
  i652.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i653[3], i652.emission)
  i652.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i653[4], i652.rotationBySpeed)
  i652.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i653[5], i652.rotationOverLifetime)
  i652.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i653[6], i652.shape)
  i652.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i653[7], i652.sizeBySpeed)
  i652.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i653[8], i652.sizeOverLifetime)
  i652.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i653[9], i652.textureSheetAnimation)
  i652.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i653[10], i652.velocityOverLifetime)
  i652.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i653[11], i652.noise)
  i652.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i653[12], i652.inheritVelocity)
  i652.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i653[13], i652.forceOverLifetime)
  i652.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i653[14], i652.limitVelocityOverLifetime)
  i652.useAutoRandomSeed = !!i653[15]
  i652.randomSeed = i653[16]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemMain()
  var i655 = data
  i654.duration = i655[0]
  i654.loop = !!i655[1]
  i654.prewarm = !!i655[2]
  i654.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.startDelay)
  i654.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[4], i654.startLifetime)
  i654.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[5], i654.startSpeed)
  i654.startSize3D = !!i655[6]
  i654.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[7], i654.startSizeX)
  i654.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[8], i654.startSizeY)
  i654.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[9], i654.startSizeZ)
  i654.startRotation3D = !!i655[10]
  i654.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[11], i654.startRotationX)
  i654.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[12], i654.startRotationY)
  i654.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[13], i654.startRotationZ)
  i654.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i655[14], i654.startColor)
  i654.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[15], i654.gravityModifier)
  i654.simulationSpace = i655[16]
  request.r(i655[17], i655[18], 0, i654, 'customSimulationSpace')
  i654.simulationSpeed = i655[19]
  i654.useUnscaledTime = !!i655[20]
  i654.scalingMode = i655[21]
  i654.playOnAwake = !!i655[22]
  i654.maxParticles = i655[23]
  i654.emitterVelocityMode = i655[24]
  i654.stopAction = i655[25]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i656 = root || new pc.MinMaxCurve()
  var i657 = data
  i656.mode = i657[0]
  i656.curveMin = new pc.AnimationCurve( { keys_flow: i657[1] } )
  i656.curveMax = new pc.AnimationCurve( { keys_flow: i657[2] } )
  i656.curveMultiplier = i657[3]
  i656.constantMin = i657[4]
  i656.constantMax = i657[5]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i658 = root || new pc.MinMaxGradient()
  var i659 = data
  i658.mode = i659[0]
  i658.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i659[1], i658.gradientMin)
  i658.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i659[2], i658.gradientMax)
  i658.colorMin = new pc.Color(i659[3], i659[4], i659[5], i659[6])
  i658.colorMax = new pc.Color(i659[7], i659[8], i659[9], i659[10])
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i661 = data
  i660.mode = i661[0]
  var i663 = i661[1]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i663[i + 0]) );
  }
  i660.colorKeys = i662
  var i665 = i661[2]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i665[i + 0]) );
  }
  i660.alphaKeys = i664
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemColorBySpeed()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i667[1], i666.color)
  i666.range = new pc.Vec2( i667[2], i667[3] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i671 = data
  i670.color = new pc.Color(i671[0], i671[1], i671[2], i671[3])
  i670.time = i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i675 = data
  i674.alpha = i675[0]
  i674.time = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemColorOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i677[1], i676.color)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemEmitter()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.rateOverTime)
  i678.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.rateOverDistance)
  var i681 = i679[3]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i681[i + 0]) );
  }
  i678.bursts = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemBurst()
  var i685 = data
  i684.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[0], i684.count)
  i684.cycleCount = i685[1]
  i684.minCount = i685[2]
  i684.maxCount = i685[3]
  i684.repeatInterval = i685[4]
  i684.time = i685[5]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemRotationBySpeed()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.separateAxes = !!i687[4]
  i686.range = new pc.Vec2( i687[5], i687[6] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemRotationOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.separateAxes = !!i689[4]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemShape()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.shapeType = i691[1]
  i690.randomDirectionAmount = i691[2]
  i690.sphericalDirectionAmount = i691[3]
  i690.randomPositionAmount = i691[4]
  i690.alignToDirection = !!i691[5]
  i690.radius = i691[6]
  i690.radiusMode = i691[7]
  i690.radiusSpread = i691[8]
  i690.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[9], i690.radiusSpeed)
  i690.radiusThickness = i691[10]
  i690.angle = i691[11]
  i690.length = i691[12]
  i690.boxThickness = new pc.Vec3( i691[13], i691[14], i691[15] )
  i690.meshShapeType = i691[16]
  request.r(i691[17], i691[18], 0, i690, 'mesh')
  request.r(i691[19], i691[20], 0, i690, 'meshRenderer')
  request.r(i691[21], i691[22], 0, i690, 'skinnedMeshRenderer')
  i690.useMeshMaterialIndex = !!i691[23]
  i690.meshMaterialIndex = i691[24]
  i690.useMeshColors = !!i691[25]
  i690.normalOffset = i691[26]
  i690.arc = i691[27]
  i690.arcMode = i691[28]
  i690.arcSpread = i691[29]
  i690.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[30], i690.arcSpeed)
  i690.donutRadius = i691[31]
  i690.position = new pc.Vec3( i691[32], i691[33], i691[34] )
  i690.rotation = new pc.Vec3( i691[35], i691[36], i691[37] )
  i690.scale = new pc.Vec3( i691[38], i691[39], i691[40] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemSizeBySpeed()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  i692.range = new pc.Vec2( i693[5], i693[6] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemSizeOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.separateAxes = !!i695[4]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.mode = i697[1]
  i696.animation = i697[2]
  i696.numTilesX = i697[3]
  i696.numTilesY = i697[4]
  i696.useRandomRow = !!i697[5]
  i696.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[6], i696.frameOverTime)
  i696.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[7], i696.startFrame)
  i696.cycleCount = i697[8]
  i696.rowIndex = i697[9]
  i696.flipU = i697[10]
  i696.flipV = i697[11]
  i696.spriteCount = i697[12]
  var i699 = i697[13]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sprites = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.x)
  i702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.y)
  i702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[3], i702.z)
  i702.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[4], i702.radial)
  i702.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[5], i702.speedModifier)
  i702.space = i703[6]
  i702.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[7], i702.orbitalX)
  i702.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[8], i702.orbitalY)
  i702.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[9], i702.orbitalZ)
  i702.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[10], i702.orbitalOffsetX)
  i702.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[11], i702.orbitalOffsetY)
  i702.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[12], i702.orbitalOffsetZ)
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemNoise()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.separateAxes = !!i705[1]
  i704.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.strengthX)
  i704.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.strengthY)
  i704.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.strengthZ)
  i704.frequency = i705[5]
  i704.damping = !!i705[6]
  i704.octaveCount = i705[7]
  i704.octaveMultiplier = i705[8]
  i704.octaveScale = i705[9]
  i704.quality = i705[10]
  i704.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[11], i704.scrollSpeed)
  i704.scrollSpeedMultiplier = i705[12]
  i704.remapEnabled = !!i705[13]
  i704.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[14], i704.remapX)
  i704.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[15], i704.remapY)
  i704.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[16], i704.remapZ)
  i704.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[17], i704.positionAmount)
  i704.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[18], i704.rotationAmount)
  i704.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[19], i704.sizeAmount)
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemInheritVelocity()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.mode = i707[1]
  i706.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.curve)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemForceOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.space = i709[4]
  i708.randomized = !!i709[5]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.limit)
  i710.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.limitX)
  i710.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.limitY)
  i710.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.limitZ)
  i710.dampen = i711[5]
  i710.separateAxes = !!i711[6]
  i710.space = i711[7]
  i710.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[8], i710.drag)
  i710.multiplyDragByParticleSize = !!i711[9]
  i710.multiplyDragByParticleVelocity = !!i711[10]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i713 = data
  i712.enabled = !!i713[0]
  request.r(i713[1], i713[2], 0, i712, 'sharedMaterial')
  var i715 = i713[3]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.sharedMaterials = i714
  i712.receiveShadows = !!i713[4]
  i712.shadowCastingMode = i713[5]
  i712.sortingLayerID = i713[6]
  i712.sortingOrder = i713[7]
  i712.lightmapIndex = i713[8]
  i712.lightmapSceneIndex = i713[9]
  i712.lightmapScaleOffset = new pc.Vec4( i713[10], i713[11], i713[12], i713[13] )
  i712.lightProbeUsage = i713[14]
  i712.reflectionProbeUsage = i713[15]
  request.r(i713[16], i713[17], 0, i712, 'mesh')
  i712.meshCount = i713[18]
  i712.activeVertexStreamsCount = i713[19]
  i712.alignment = i713[20]
  i712.renderMode = i713[21]
  i712.sortMode = i713[22]
  i712.lengthScale = i713[23]
  i712.velocityScale = i713[24]
  i712.cameraVelocityScale = i713[25]
  i712.normalDirection = i713[26]
  i712.sortingFudge = i713[27]
  i712.minParticleSize = i713[28]
  i712.maxParticleSize = i713[29]
  i712.pivot = new pc.Vec3( i713[30], i713[31], i713[32] )
  request.r(i713[33], i713[34], 0, i712, 'trailMaterial')
  return i712
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i716 = root || request.c( 'PlayerController' )
  var i717 = data
  i716.moveSpeed = i717[0]
  return i716
}

Deserializers["Enemy"] = function (request, data, root) {
  var i718 = root || request.c( 'Enemy' )
  var i719 = data
  i718.maxMovementSpeed = i719[0]
  i718.maxHealth = i719[1]
  i718.currentHealth = i719[2]
  request.r(i719[3], i719[4], 0, i718, 'weaponManager')
  request.r(i719[5], i719[6], 0, i718, 'rigidbody2D')
  request.r(i719[7], i719[8], 0, i718, 'dieParticle')
  request.r(i719[9], i719[10], 0, i718, 'bodyAnimator')
  request.r(i719[11], i719[12], 0, i718, 'bodySpriteRenderer')
  request.r(i719[13], i719[14], 0, i718, 'collider')
  request.r(i719[15], i719[16], 0, i718, 'CollectableSwordPrefab')
  i718.isTakeDamage = !!i719[17]
  i718.isDead = !!i719[18]
  i718.detectionRadius = i719[19]
  i718.fleeSpeedMultiplier = i719[20]
  i718.attackRange = i719[21]
  request.r(i719[22], i719[23], 0, i718, 'playerTarget')
  request.r(i719[24], i719[25], 0, i718, 'currentTarget')
  return i718
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i720 = root || request.c( 'ObjectPool' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'swordPrefab')
  request.r(i721[2], i721[3], 0, i720, 'swordParent')
  i720.initialPoolSize = i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i723 = data
  i722.ambientIntensity = i723[0]
  i722.reflectionIntensity = i723[1]
  i722.ambientMode = i723[2]
  i722.ambientLight = new pc.Color(i723[3], i723[4], i723[5], i723[6])
  i722.ambientSkyColor = new pc.Color(i723[7], i723[8], i723[9], i723[10])
  i722.ambientGroundColor = new pc.Color(i723[11], i723[12], i723[13], i723[14])
  i722.ambientEquatorColor = new pc.Color(i723[15], i723[16], i723[17], i723[18])
  i722.fogColor = new pc.Color(i723[19], i723[20], i723[21], i723[22])
  i722.fogEndDistance = i723[23]
  i722.fogStartDistance = i723[24]
  i722.fogDensity = i723[25]
  i722.fog = !!i723[26]
  request.r(i723[27], i723[28], 0, i722, 'skybox')
  i722.fogMode = i723[29]
  var i725 = i723[30]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i725[i + 0]) );
  }
  i722.lightmaps = i724
  i722.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i723[31], i722.lightProbes)
  i722.lightmapsMode = i723[32]
  i722.mixedBakeMode = i723[33]
  i722.environmentLightingMode = i723[34]
  i722.ambientProbe = new pc.SphericalHarmonicsL2(i723[35])
  i722.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i723[36])
  i722.useReferenceAmbientProbe = !!i723[37]
  request.r(i723[38], i723[39], 0, i722, 'customReflection')
  request.r(i723[40], i723[41], 0, i722, 'defaultReflection')
  i722.defaultReflectionMode = i723[42]
  i722.defaultReflectionResolution = i723[43]
  i722.sunLightObjectId = i723[44]
  i722.pixelLightCount = i723[45]
  i722.defaultReflectionHDR = !!i723[46]
  i722.hasLightDataAsset = !!i723[47]
  i722.hasManualGenerate = !!i723[48]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'lightmapColor')
  request.r(i729[2], i729[3], 0, i728, 'lightmapDirection')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i730 = root || new UnityEngine.LightProbes()
  var i731 = data
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i739 = data
  i738.AdditionalLightsPerObjectLimit = i739[0]
  i738.AdditionalLightsRenderingMode = i739[1]
  i738.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i739[2], i738.LightRenderingMode)
  i738.ColorGradingLutSize = i739[3]
  i738.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i739[4], i738.ColorGradingMode)
  i738.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i739[5], i738.MainLightRenderingMode)
  i738.MainLightRenderingModeValue = i739[6]
  i738.MainLightShadowsSupported = !!i739[7]
  i738.MixedLightingSupported = !!i739[8]
  i738.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i739[9], i738.MsaaQuality)
  i738.MSAA = i739[10]
  i738.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i739[11], i738.OpaqueDownsampling)
  i738.RenderScale = i739[12]
  i738.RequireDepthTexture = !!i739[13]
  i738.RequireOpaqueTexture = !!i739[14]
  i738.ShadowAtlasResolution = i739[15]
  i738.ShadowDepthBias = i739[16]
  i738.SupportsHDR = !!i739[17]
  i738.SupportsTerrainHoles = !!i739[18]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i741 = data
  i740.Disabled = i741[0]
  i740.PerVertex = i741[1]
  i740.PerPixel = i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i743 = data
  i742.LowDynamicRange = i743[0]
  i742.HighDynamicRange = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i745 = data
  i744.Disabled = i745[0]
  i744._2x = i745[1]
  i744._4x = i745[2]
  i744._8x = i745[3]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i747 = data
  i746.None = i747[0]
  i746._2xBilinear = i747[1]
  i746._4xBox = i747[2]
  i746._4xBilinear = i747[3]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i749 = data
  var i751 = i749[0]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i751[i + 0]));
  }
  i748.ShaderCompilationErrors = i750
  i748.name = i749[1]
  i748.guid = i749[2]
  var i753 = i749[3]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i748.shaderDefinedKeywords = i752
  var i755 = i749[4]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i755[i + 0]) );
  }
  i748.passes = i754
  var i757 = i749[5]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i757[i + 0]) );
  }
  i748.usePasses = i756
  var i759 = i749[6]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i759[i + 0]) );
  }
  i748.defaultParameterValues = i758
  request.r(i749[7], i749[8], 0, i748, 'unityFallbackShader')
  i748.readDepth = !!i749[9]
  i748.isCreatedByShaderGraph = !!i749[10]
  i748.usedBatchUniforms = i749[11]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i763 = data
  i762.shaderName = i763[0]
  i762.errorMessage = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i768 = root || new pc.UnityShaderPass()
  var i769 = data
  i768.id = i769[0]
  i768.subShaderIndex = i769[1]
  i768.name = i769[2]
  i768.passType = i769[3]
  i768.grabPassTextureName = i769[4]
  i768.usePass = !!i769[5]
  i768.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[6], i768.zTest)
  i768.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[7], i768.zWrite)
  i768.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[8], i768.culling)
  i768.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i769[9], i768.blending)
  i768.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i769[10], i768.alphaBlending)
  i768.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[11], i768.colorWriteMask)
  i768.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[12], i768.offsetUnits)
  i768.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[13], i768.offsetFactor)
  i768.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[14], i768.stencilRef)
  i768.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[15], i768.stencilReadMask)
  i768.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[16], i768.stencilWriteMask)
  i768.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i769[17], i768.stencilOp)
  i768.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i769[18], i768.stencilOpFront)
  i768.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i769[19], i768.stencilOpBack)
  var i771 = i769[20]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i771[i + 0]) );
  }
  i768.tags = i770
  var i773 = i769[21]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i768.passDefinedKeywords = i772
  var i775 = i769[22]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i775[i + 0]) );
  }
  i768.passDefinedKeywordGroups = i774
  var i777 = i769[23]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i777[i + 0]) );
  }
  i768.variants = i776
  var i779 = i769[24]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i779[i + 0]) );
  }
  i768.excludedVariants = i778
  i768.hasDepthReader = !!i769[25]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i781 = data
  i780.val = i781[0]
  i780.name = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i783 = data
  i782.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[0], i782.src)
  i782.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[1], i782.dst)
  i782.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[2], i782.op)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i785 = data
  i784.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[0], i784.pass)
  i784.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[1], i784.fail)
  i784.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[2], i784.zFail)
  i784.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[3], i784.comp)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i789 = data
  i788.name = i789[0]
  i788.value = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i792.keywords = i794
  i792.hasDiscard = !!i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i799 = data
  i798.passId = i799[0]
  i798.subShaderIndex = i799[1]
  var i801 = i799[2]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i798.keywords = i800
  i798.vertexProgram = i799[3]
  i798.fragmentProgram = i799[4]
  i798.compiledForWebGL2 = !!i799[5]
  i798.readDepth = !!i799[6]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'shader')
  i804.pass = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i809 = data
  i808.name = i809[0]
  i808.type = i809[1]
  i808.value = new pc.Vec4( i809[2], i809[3], i809[4], i809[5] )
  i808.textureValue = i809[6]
  i808.shaderPropertyFlag = i809[7]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i811 = data
  i810.name = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'texture')
  i810.aabb = i811[3]
  i810.vertices = i811[4]
  i810.triangles = i811[5]
  i810.textureRect = UnityEngine.Rect.MinMaxRect(i811[6], i811[7], i811[8], i811[9])
  i810.packedRect = UnityEngine.Rect.MinMaxRect(i811[10], i811[11], i811[12], i811[13])
  i810.border = new pc.Vec4( i811[14], i811[15], i811[16], i811[17] )
  i810.transparency = i811[18]
  i810.bounds = i811[19]
  i810.pixelsPerUnit = i811[20]
  i810.textureWidth = i811[21]
  i810.textureHeight = i811[22]
  i810.nativeSize = new pc.Vec2( i811[23], i811[24] )
  i810.pivot = new pc.Vec2( i811[25], i811[26] )
  i810.textureRectOffset = new pc.Vec2( i811[27], i811[28] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i813 = data
  i812.name = i813[0]
  i812.wrapMode = i813[1]
  i812.isLooping = !!i813[2]
  i812.length = i813[3]
  var i815 = i813[4]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i815[i + 0]) );
  }
  i812.curves = i814
  var i817 = i813[5]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i817[i + 0]) );
  }
  i812.events = i816
  i812.halfPrecision = !!i813[6]
  i812._frameRate = i813[7]
  i812.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i813[8], i812.localBounds)
  i812.hasMuscleCurves = !!i813[9]
  var i819 = i813[10]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i812.clipMuscleConstant = i818
  i812.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i813[11], i812.clipBindingConstant)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i823 = data
  i822.path = i823[0]
  i822.hash = i823[1]
  i822.componentType = i823[2]
  i822.property = i823[3]
  i822.keys = i823[4]
  var i825 = i823[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i825[i + 0]) );
  }
  i822.objectReferenceKeys = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i829 = data
  i828.time = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'value')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i833 = data
  i832.functionName = i833[0]
  i832.floatParameter = i833[1]
  i832.intParameter = i833[2]
  i832.stringParameter = i833[3]
  request.r(i833[4], i833[5], 0, i832, 'objectReferenceParameter')
  i832.time = i833[6]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i835 = data
  i834.center = new pc.Vec3( i835[0], i835[1], i835[2] )
  i834.extends = new pc.Vec3( i835[3], i835[4], i835[5] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i839 = data
  var i841 = i839[0]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i838.genericBindings = i840
  var i843 = i839[1]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.pptrCurveMapping = i842
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i845 = data
  i844.name = i845[0]
  var i847 = i845[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i847[i + 0]) );
  }
  i844.layers = i846
  var i849 = i845[2]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i849[i + 0]) );
  }
  i844.parameters = i848
  i844.animationClips = i845[3]
  i844.avatarUnsupported = i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i853 = data
  i852.name = i853[0]
  i852.defaultWeight = i853[1]
  i852.blendingMode = i853[2]
  i852.avatarMask = i853[3]
  i852.syncedLayerIndex = i853[4]
  i852.syncedLayerAffectsTiming = !!i853[5]
  i852.syncedLayers = i853[6]
  i852.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i853[7], i852.stateMachine)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i855 = data
  i854.id = i855[0]
  i854.name = i855[1]
  i854.path = i855[2]
  var i857 = i855[3]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i857[i + 0]) );
  }
  i854.states = i856
  var i859 = i855[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i859[i + 0]) );
  }
  i854.machines = i858
  var i861 = i855[5]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i861[i + 0]) );
  }
  i854.entryStateTransitions = i860
  var i863 = i855[6]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i863[i + 0]) );
  }
  i854.exitStateTransitions = i862
  var i865 = i855[7]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i865[i + 0]) );
  }
  i854.anyStateTransitions = i864
  i854.defaultStateId = i855[8]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  i868.cycleOffset = i869[2]
  i868.cycleOffsetParameter = i869[3]
  i868.cycleOffsetParameterActive = !!i869[4]
  i868.mirror = !!i869[5]
  i868.mirrorParameter = i869[6]
  i868.mirrorParameterActive = !!i869[7]
  i868.motionId = i869[8]
  i868.nameHash = i869[9]
  i868.fullPathHash = i869[10]
  i868.speed = i869[11]
  i868.speedParameter = i869[12]
  i868.speedParameterActive = !!i869[13]
  i868.tag = i869[14]
  i868.tagHash = i869[15]
  i868.writeDefaultValues = !!i869[16]
  var i871 = i869[17]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.behaviours = i870
  var i873 = i869[18]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i873[i + 0]) );
  }
  i868.transitions = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i879 = data
  i878.fullPath = i879[0]
  i878.canTransitionToSelf = !!i879[1]
  i878.duration = i879[2]
  i878.exitTime = i879[3]
  i878.hasExitTime = !!i879[4]
  i878.hasFixedDuration = !!i879[5]
  i878.interruptionSource = i879[6]
  i878.offset = i879[7]
  i878.orderedInterruption = !!i879[8]
  i878.destinationStateId = i879[9]
  i878.isExit = !!i879[10]
  i878.mute = !!i879[11]
  i878.solo = !!i879[12]
  var i881 = i879[13]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i881[i + 0]) );
  }
  i878.conditions = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i887 = data
  i886.destinationStateId = i887[0]
  i886.isExit = !!i887[1]
  i886.mute = !!i887[2]
  i886.solo = !!i887[3]
  var i889 = i887[4]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i889[i + 0]) );
  }
  i886.conditions = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i893 = data
  i892.defaultBool = !!i893[0]
  i892.defaultFloat = i893[1]
  i892.defaultInt = i893[2]
  i892.name = i893[3]
  i892.nameHash = i893[4]
  i892.type = i893[5]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i897 = data
  i896.mode = i897[0]
  i896.parameter = i897[1]
  i896.threshold = i897[2]
  return i896
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i899 = data
  i898.useSafeMode = !!i899[0]
  i898.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i899[1], i898.safeModeOptions)
  i898.timeScale = i899[2]
  i898.unscaledTimeScale = i899[3]
  i898.useSmoothDeltaTime = !!i899[4]
  i898.maxSmoothUnscaledTime = i899[5]
  i898.rewindCallbackMode = i899[6]
  i898.showUnityEditorReport = !!i899[7]
  i898.logBehaviour = i899[8]
  i898.drawGizmos = !!i899[9]
  i898.defaultRecyclable = !!i899[10]
  i898.defaultAutoPlay = i899[11]
  i898.defaultUpdateType = i899[12]
  i898.defaultTimeScaleIndependent = !!i899[13]
  i898.defaultEaseType = i899[14]
  i898.defaultEaseOvershootOrAmplitude = i899[15]
  i898.defaultEasePeriod = i899[16]
  i898.defaultAutoKill = !!i899[17]
  i898.defaultLoopType = i899[18]
  i898.debugMode = !!i899[19]
  i898.debugStoreTargetId = !!i899[20]
  i898.showPreviewPanel = !!i899[21]
  i898.storeSettingsLocation = i899[22]
  i898.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i899[23], i898.modules)
  i898.createASMDEF = !!i899[24]
  i898.showPlayingTweens = !!i899[25]
  i898.showPausedTweens = !!i899[26]
  return i898
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i900 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i901 = data
  i900.logBehaviour = i901[0]
  i900.nestedTweenFailureBehaviour = i901[1]
  return i900
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i902 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i903 = data
  i902.showPanel = !!i903[0]
  i902.audioEnabled = !!i903[1]
  i902.physicsEnabled = !!i903[2]
  i902.physics2DEnabled = !!i903[3]
  i902.spriteEnabled = !!i903[4]
  i902.uiEnabled = !!i903[5]
  i902.textMeshProEnabled = !!i903[6]
  i902.tk2DEnabled = !!i903[7]
  i902.deAudioEnabled = !!i903[8]
  i902.deUnityExtendedEnabled = !!i903[9]
  i902.epoOutlineEnabled = !!i903[10]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i907[i + 0]) );
  }
  i904.files = i906
  i904.componentToPrefabIds = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i911 = data
  i910.path = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'unityObject')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i915[i + 0]) );
  }
  i912.scriptsExecutionOrder = i914
  var i917 = i913[1]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i917[i + 0]) );
  }
  i912.sortingLayers = i916
  var i919 = i913[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i919[i + 0]) );
  }
  i912.cullingLayers = i918
  i912.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i913[3], i912.timeSettings)
  i912.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i913[4], i912.physicsSettings)
  i912.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i913[5], i912.physics2DSettings)
  i912.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i913[6], i912.qualitySettings)
  i912.enableRealtimeShadows = !!i913[7]
  i912.enableAutoInstancing = !!i913[8]
  i912.enableDynamicBatching = !!i913[9]
  i912.lightmapEncodingQuality = i913[10]
  i912.desiredColorSpace = i913[11]
  var i921 = i913[12]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i912.allTags = i920
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i925 = data
  i924.name = i925[0]
  i924.value = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i929 = data
  i928.id = i929[0]
  i928.name = i929[1]
  i928.value = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i933 = data
  i932.id = i933[0]
  i932.name = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i935 = data
  i934.fixedDeltaTime = i935[0]
  i934.maximumDeltaTime = i935[1]
  i934.timeScale = i935[2]
  i934.maximumParticleTimestep = i935[3]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i937 = data
  i936.gravity = new pc.Vec3( i937[0], i937[1], i937[2] )
  i936.defaultSolverIterations = i937[3]
  i936.bounceThreshold = i937[4]
  i936.autoSyncTransforms = !!i937[5]
  i936.autoSimulation = !!i937[6]
  var i939 = i937[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i939[i + 0]) );
  }
  i936.collisionMatrix = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i943 = data
  i942.enabled = !!i943[0]
  i942.layerId = i943[1]
  i942.otherLayerId = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'material')
  i944.gravity = new pc.Vec2( i945[2], i945[3] )
  i944.positionIterations = i945[4]
  i944.velocityIterations = i945[5]
  i944.velocityThreshold = i945[6]
  i944.maxLinearCorrection = i945[7]
  i944.maxAngularCorrection = i945[8]
  i944.maxTranslationSpeed = i945[9]
  i944.maxRotationSpeed = i945[10]
  i944.baumgarteScale = i945[11]
  i944.baumgarteTOIScale = i945[12]
  i944.timeToSleep = i945[13]
  i944.linearSleepTolerance = i945[14]
  i944.angularSleepTolerance = i945[15]
  i944.defaultContactOffset = i945[16]
  i944.autoSimulation = !!i945[17]
  i944.queriesHitTriggers = !!i945[18]
  i944.queriesStartInColliders = !!i945[19]
  i944.callbacksOnDisable = !!i945[20]
  i944.reuseCollisionCallbacks = !!i945[21]
  i944.autoSyncTransforms = !!i945[22]
  var i947 = i945[23]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i947[i + 0]) );
  }
  i944.collisionMatrix = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i951 = data
  i950.enabled = !!i951[0]
  i950.layerId = i951[1]
  i950.otherLayerId = i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i953 = data
  var i955 = i953[0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i955[i + 0]) );
  }
  i952.qualityLevels = i954
  var i957 = i953[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i952.names = i956
  i952.shadows = i953[2]
  i952.anisotropicFiltering = i953[3]
  i952.antiAliasing = i953[4]
  i952.lodBias = i953[5]
  i952.shadowCascades = i953[6]
  i952.shadowDistance = i953[7]
  i952.shadowmaskMode = i953[8]
  i952.shadowProjection = i953[9]
  i952.shadowResolution = i953[10]
  i952.softParticles = !!i953[11]
  i952.softVegetation = !!i953[12]
  i952.activeColorSpace = i953[13]
  i952.desiredColorSpace = i953[14]
  i952.masterTextureLimit = i953[15]
  i952.maxQueuedFrames = i953[16]
  i952.particleRaycastBudget = i953[17]
  i952.pixelLightCount = i953[18]
  i952.realtimeReflectionProbes = !!i953[19]
  i952.shadowCascade2Split = i953[20]
  i952.shadowCascade4Split = new pc.Vec3( i953[21], i953[22], i953[23] )
  i952.streamingMipmapsActive = !!i953[24]
  i952.vSyncCount = i953[25]
  i952.asyncUploadBufferSize = i953[26]
  i952.asyncUploadTimeSlice = i953[27]
  i952.billboardsFaceCameraPosition = !!i953[28]
  i952.shadowNearPlaneOffset = i953[29]
  i952.streamingMipmapsMemoryBudget = i953[30]
  i952.maximumLODLevel = i953[31]
  i952.streamingMipmapsAddAllCameras = !!i953[32]
  i952.streamingMipmapsMaxLevelReduction = i953[33]
  i952.streamingMipmapsRenderersPerFrame = i953[34]
  i952.resolutionScalingFixedDPIFactor = i953[35]
  i952.streamingMipmapsMaxFileIORequests = i953[36]
  i952.currentQualityLevel = i953[37]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i963 = data
  i962.weight = i963[0]
  i962.vertices = i963[1]
  i962.normals = i963[2]
  i962.tangents = i963[3]
  return i962
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[7],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[15],"64":[15],"65":[15],"66":[15],"67":[15],"68":[15],"69":[15],"70":[15],"71":[15],"72":[15],"73":[15],"74":[15],"75":[15],"76":[7],"77":[5],"78":[79],"80":[79],"27":[26],"81":[30],"82":[26],"83":[84],"85":[86],"87":[7],"88":[26],"89":[5,26],"90":[26,31],"91":[26],"92":[31,26],"93":[5],"94":[31,26],"95":[26],"96":[7],"21":[7],"97":[98],"99":[84],"100":[6],"101":[26],"102":[26],"30":[27],"32":[31,26],"103":[26],"29":[27],"104":[26],"105":[26],"106":[26],"107":[26],"108":[26],"109":[26],"110":[26],"111":[26],"112":[26],"113":[31,26],"114":[26],"115":[26],"116":[26],"117":[26],"118":[31,26],"119":[26],"120":[34],"121":[34],"35":[34],"122":[34],"123":[7],"124":[7],"125":[84]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.Camera","UnityEngine.Sprite","UnityEngine.Texture2D","UnityEngine.Shader","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Sword","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","GameController","MapGenerator","FenceGenerator","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Joystick","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Player","WeaponManager","UnityEngine.ParticleSystem","WeaponGruopRotator","UnityEngine.ParticleSystemRenderer","PlayerController","Enemy","ObjectPool","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScratchCardAsset.Core.InputData.CanvasGraphicRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.51f1";

Deserializers.productName = "LoopGamesCase";

Deserializers.lunaInitializationTime = "11/02/2024 06:53:26";

Deserializers.lunaDaysRunning = "6.2";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25422";

Deserializers.projectId = "ee94dc5b6dc3eee48a133f619e47f812";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: 4.0.0-pre.2\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1679";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3237";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = true;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ecb9e056-4f0f-4fcb-b318-7c1401e1d22c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

