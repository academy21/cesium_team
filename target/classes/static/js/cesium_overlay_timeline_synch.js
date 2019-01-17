function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) {
    }
}

// Кросс-браузерное содание объекта XMLHttpRequest
function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest !== 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function getArtefactsList() {
    // (1) создать объект для запроса к серверу
    var req = getXmlHttp();

    req.onreadystatechange = function() {
        // onreadystatechange активируется при получении ответа сервера

        if (req.readyState === 4) {
            // если запрос закончил выполняться

            //statusElem.innerHTML = req.statusText // показать статус (Not Found, ОК..)

            if(req.status === 200) {
                // если статус 200 (ОК) - выдать ответ пользователю
                alert("Список артефактов получен: " + req.responseText);
                //console.log(req.responseText);
                //startBaseLayerAnimation(JSON.parse(req.responseText));
            }
            // тут можно добавить else с обработкой ошибок запроса
        }
    };

    // (2) задать адрес подключения
    req.open('GET', '/rest/artefacts', true);

    // объект запроса подготовлен: указан адрес и создана функция onreadystatechange
    // для обработки ответа сервера

    // (3)
    req.send(null);  // отослать запрос
}

// Grant your CesiumJS app access to your ion assets
// This is your actual default access token, you can copy/paste this directly into your app code
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjOGZiMDIxMi02NzYwLTQ5MzgtOTk0ZC02YTJiYWU5MTQyODUiLCJpZCI6MjE0MSwiaWF0IjoxNTMxNzI3NzUzfQ.cRJYZ0l7AOiA2BcvqzY-Z4kIJcyZd2G-ygod2Dw9ZtA';
var viewer = new Cesium.Viewer('cesiumContainer');

function dataCallback(interval, index) {
    var time;
    if (index === 0) { // leading
        time = Cesium.JulianDate.toIso8601(interval.stop);
    } else {
        time = Cesium.JulianDate.toIso8601(interval.start);
    }

    return {
        Time: time
    };
}

var times = Cesium.TimeIntervalCollection.fromIso8601({
    iso8601: '2017-06-10/2018-09-20/P1D',
    leadingInterval: true,
    trailingInterval: true,
    isStopIncluded: false, // We want stop time to be part of the trailing interval
    dataCallback: dataCallback
});

// Add a WMTS imagery layer
var provider = new Cesium.WebMapTileServiceImageryProvider({
    url : 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MLS_O3_46hPa_Day/default/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png',
    layer : 'MLS_O3_46hPa_Day',
    style : 'default',
    tileMatrixSetID : '2km',
    maximumLevel : 5,
    format : 'image/png',
    clock: viewer.clock,
    times: times,
    credit : 'NASA Global Imagery Browse Services for EOSDIS'
});

var imageryLayers = viewer.imageryLayers;
imageryLayers.addImageryProvider(provider);
provider.readyPromise
    .then(function() {
        var start = Cesium.JulianDate.fromIso8601('2017-06-10');
        var stop = Cesium.JulianDate.fromIso8601('2018-09-20');

        viewer.timeline.zoomTo(start, stop);

        var clock = viewer.clock;
        clock.startTime = start;
        clock.stopTime = stop;
        clock.currentTime = start;
        clock.clockRange = Cesium.ClockRange.LOOP_STOP;
        clock.multiplier = 86400;
    });

function addPoint() {
    Sandcastle.declare(addPoint);

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-80.50, 35.14),
        point : {
            color : Cesium.Color.BLUE,
            pixelSize : 10
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-80.12, 25.46),
        point : {
            color : Cesium.Color.LIME,
            pixelSize : 10
        }
    });
}

addPoint();

Sandcastle.addToolbarMenu([{
    text : 'Add point',
    onselect : function() {
        addPoint();
        Sandcastle.highlight(addPoint);
    }
}, {
    text : 'Get Artifacts',
    onselect : function ( ) {
        getArtefactsList();
        Sandcastle.highlight(getArtefactsList);
    }
}]);

Sandcastle.reset = function () {
    viewer.entities.removeAll();
};