var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.25480821294788925,
        "pitch": -0.18719689107727788,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.38645405799993604,
          "pitch": 0.13823056999051175,
          "rotation": 0,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9783040810428822,
          "pitch": -0.028549138283112896,
          "title": "Renta Deparamentos",
          "text": "Bernard Shaw #22, Col. Polanco<div>Excelente ubicación</div>"
        }
      ]
    },
    {
      "id": "1-recepcin",
      "name": "Recepción",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.4452319341573059,
        "pitch": 0.3078896234823123,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.015241024811578185,
          "pitch": 0.09372189380296447,
          "rotation": 0,
          "target": "2-acceso602"
        },
        {
          "yaw": -2.935409116377725,
          "pitch": 0.5452936630079002,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7991976910124645,
          "pitch": -0.2090785022541759,
          "title": "Amplio Recibidor",
          "text": "2 elevadores,<div>Escaleras</div><div>Vigilancia 24 hrs.</div>"
        }
      ]
    },
    {
      "id": "2-acceso602",
      "name": "Acceso602",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.7034745454466851,
        "pitch": 0.1428597534299314,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.6552314897793252,
          "pitch": 0.6252275458331091,
          "rotation": 0,
          "target": "3-salacomedor"
        },
        {
          "yaw": 0.9664277030560378,
          "pitch": 0.7789352020991096,
          "rotation": 0,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5789525352258345,
          "pitch": -0.30199389670348964,
          "title": "Departamento 602",
          "text": "Amplios espacios,&nbsp;<div>Dos departamentos por piso</div>"
        }
      ]
    },
    {
      "id": "3-salacomedor",
      "name": "SalaComedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1156544162773585,
          "pitch": 0.41099041602658204,
          "rotation": 0,
          "target": "2-acceso602"
        },
        {
          "yaw": 2.4397991315203083,
          "pitch": 0.36374267667955706,
          "rotation": 5.497787143782138,
          "target": "7-pasillodistribucin"
        },
        {
          "yaw": 2.820501939980038,
          "pitch": 0.34036031048614035,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0037563743987867,
          "pitch": -0.10673560359265544,
          "title": "Departamento 142 m2",
          "text": "Sala Comedor,&nbsp;<div>2 Recámaras,&nbsp;</div><div>2 Baños completos,&nbsp;</div><div>Amplia Cocina,&nbsp;</div><div>Patio y Cuarto de Servicio</div><div>Un lugar de Estacionamiento</div>"
        }
      ]
    },
    {
      "id": "4-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.5571575830235957,
        "pitch": 0.22780452163826936,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.017629084371797887,
          "pitch": 0.3509284234291563,
          "rotation": 0,
          "target": "5-patioservicio"
        },
        {
          "yaw": 2.7304304387671294,
          "pitch": 0.3213070244607472,
          "rotation": 0,
          "target": "3-salacomedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-patioservicio",
      "name": "PatioServicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.16202941528147,
        "pitch": 0.982784556471433,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.11484160606687688,
          "pitch": 0.5062011198158327,
          "rotation": 0,
          "target": "6-cuartoservicio"
        },
        {
          "yaw": 1.304764569247844,
          "pitch": 0.5495000718903817,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cuartoservicio",
      "name": "CuartoServicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.0472963231368873,
        "pitch": 0.9603078821856901,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.17981248435478747,
          "pitch": 0.5363214181031477,
          "rotation": 0,
          "target": "5-patioservicio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pasillodistribucin",
      "name": "PasilloDistribución",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.4449795168328876,
        "pitch": 0.8712711022430497,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.05403003856418209,
          "pitch": 0.6705274671890589,
          "rotation": 0,
          "target": "8-pasillo"
        },
        {
          "yaw": 3.0444481182082077,
          "pitch": 0.42577256403864183,
          "rotation": 0,
          "target": "9-recmara1"
        },
        {
          "yaw": 0.4456178944077216,
          "pitch": 0.8749533960671521,
          "rotation": 0.7853981633974483,
          "target": "10-bao"
        },
        {
          "yaw": -1.2884326221971527,
          "pitch": 0.465647735180136,
          "rotation": 0,
          "target": "3-salacomedor"
        },
        {
          "yaw": -1.71818317406645,
          "pitch": 0.339100050645051,
          "rotation": 5.497787143782138,
          "target": "2-acceso602"
        },
        {
          "yaw": -1.835150492771401,
          "pitch": 0.525373963842096,
          "rotation": 4.71238898038469,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.6556058984599566,
        "pitch": 0.3132882573819522,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.09326003881654543,
          "pitch": 0.35470516116015993,
          "rotation": 0,
          "target": "11-recmara2"
        },
        {
          "yaw": 3.0815183265902526,
          "pitch": 0.8011488475482054,
          "rotation": 0,
          "target": "7-pasillodistribucin"
        },
        {
          "yaw": 3.1076053501745386,
          "pitch": 0.3421195861672963,
          "rotation": 0,
          "target": "9-recmara1"
        },
        {
          "yaw": 2.131516170690059,
          "pitch": 1.0611961820244726,
          "rotation": 0,
          "target": "10-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara1",
      "name": "Recámara1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 3.0044590999689724,
        "pitch": 0.26844158682174424,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 2.6743508261962994,
          "pitch": 0.5401369125910556,
          "rotation": 0,
          "target": "7-pasillodistribucin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.8441694545360221,
        "pitch": 0.47291846166885065,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -1.9239185140079442,
          "pitch": 1.0691669382659565,
          "rotation": 0,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-recmara2",
      "name": "Recámara2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.707268345451139,
        "pitch": 0.302852484321539,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -2.965927818487721,
          "pitch": 0.4490568832820152,
          "rotation": 0,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BernardShaw22-602",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
