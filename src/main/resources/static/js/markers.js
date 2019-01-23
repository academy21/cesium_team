var screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

//var _points = {};
var _pointSelected = null;

function pointCreate(position) {
    let clickPosition = viewer.camera.pickEllipsoid(position);

    let pixelSize = 10;

    let entity = new Cesium.Entity({
        position: clickPosition,
        point: {
            pixelSize: pixelSize,
            color: Cesium.Color.RED,
            outlineWidth: 0,
            outlineColor: Cesium.Color.TRANSPARENT
        }
    });

    viewer.entities.add(entity);

    clickPosition.equalsEpsilon();

    // _points[entity.id] = {
    //     entity: entity
    // };
}

var _selectionClickFlag = false;

document.querySelector('#point-save').addEventListener('click', function () {
    if (_pointSelected === null) {
        return;
    }

    const
        lat = document.querySelector('#point-lat').value,
        lng = document.querySelector('#point-lng').value,
        pointWidth = document.querySelector('#point-width').value,
        pointHexColor = document.querySelector('#point-hex-color').value,
        pointBorderWidth = document.querySelector('#point-border-width').value,
        pointBorderHexColor = document.querySelector('#point-border-hex-color').value;

    //const entity = _pointSelected.entity;
    const entity = _pointSelected;

    entity.position = Cesium.Cartesian3.fromDegrees(lng, lat);
    entity.point.color = Cesium.Color.fromCssColorString('rgba(' + pointHexColor + ')');
    entity.point.pixelSize = pointWidth;
    entity.point.outlineColor = Cesium.Color.fromCssColorString('rgba(' + pointBorderHexColor + ')');
    entity.point.outlineWidth = pointBorderWidth;
}, false);

document.querySelector('#point-delete').addEventListener('click', function () {
    if (_pointSelected === null) {
        return;
    }

    //delete _points[_pointSelected.entity.id];
    viewer.entities.remove(_pointSelected);

    _selectionClickFlag = false;
    _pointSelected = null;
}, false);

viewer.selectedEntityChanged.addEventListener(function (entity) {
        _selectionClickFlag = true;

        if (entity === null || typeof entity === 'undefined') {
            _pointSelected = null;
            document.querySelector('.point-editor').style.display = 'none';
            return;
        }

        if (viewer.entities.values.indexOf(entity) != -1) {
            //entity.id in _points
            //_pointSelected = _points[entity.id];
            _pointSelected = entity;

            const coordObj = Cesium.Cartographic.fromCartesian(entity.position.getValue());

            document.querySelector('#point-id').innerHTML = entity.id;
            document.querySelector('.point-editor').style.display = 'block';
            document.querySelector('#point-lat').value = coordObj.latitude * (180/Cesium.Math.PI);
            document.querySelector('#point-lng').value = coordObj.longitude * (180/Cesium.Math.PI);
            document.querySelector('#point-width').value = entity.point.pixelSize;
            document.querySelector('#point-hex-color').value = entity.point.color.getValue().toCssColorString().replace(/(rgba)|(rgb)|[\s\(\)]/g, '');
            document.querySelector('#point-border-width').value =  entity.point.outlineWidth;
            document.querySelector('#point-border-hex-color').value = entity.point.outlineColor.getValue().toCssColorString().replace(/(rgba)|(rgb)|[\s\(\)]/g, '');
        } else {
            document.querySelector('.point-editor').style.display = 'none';
        }
    }
);

screenSpaceEventHandler.setInputAction(function(click) {

        if (_selectionClickFlag) {
            _selectionClickFlag = false;
            return;
        }

        pointCreate(click.position);

    },
    Cesium.ScreenSpaceEventType.LEFT_CLICK
);