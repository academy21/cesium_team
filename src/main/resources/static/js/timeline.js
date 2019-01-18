viewer._animation.container.style.visibility = 'hidden';
viewer._timeline.container.style.visibility = 'hidden';
viewer.forceResize();

function MyTimeline(layers, times) {
    this.layers = layers;
    this.times = times;
}

var timesNumber = 6;
var timesNumberMax = 6;
var timesNumberMin = 1;

function addTimes(layers, times) {
    this.layers = layers;
    this.times = times;

    if (timesNumber > 2){
        document.getElementById('input-flex-container').style.width = 100 + '%';
    }
    else {
        document.getElementById('input-flex-container').style.width = 60 * (this.layers.length/timesNumber) + 'px';
    }

    for (let i = 0; i < this.layers.length; i += timesNumber) {
        let input = document.createElement('div');
        input.id = this.layers[i].name;
        input.className = 'input';
        document.getElementById('input-flex-container').appendChild(input);
        let x = document.createElement('span');
        x.dataset.year = this.times[i].value;
        x.dataset.file = this.layers[i].name;
        let reg = ' (.*)_';
        x.dataset.info = this.layers[i].name.match(reg)[1];
        document.getElementById(this.layers[i].name).appendChild(x);
    }

    let inputs = document.getElementsByClassName('input');

    [].slice.call(inputs).forEach(function(item) {
        item.addEventListener('click', function() {
            [].slice.call(inputs).forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
            let layers = viewer.imageryLayers;
            layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
                url: 'baselayer/' + this.getElementsByTagName('span')[0].dataset.file,
                rectangle: Cesium.Rectangle.fromDegrees(-180, -90, 180, 90)
            }));
        });
    });
}

MyTimeline.prototype.render = function() {
    let parent = document.createElement('div');
    parent.id = 'flex-parent';
    parent.className = 'flex-parent';
    document.body.appendChild(parent);
    let input_container = document.createElement('div');
    input_container.id = 'input-flex-container';
    input_container.className = 'input-flex-container';
    document.getElementById('flex-parent').appendChild(input_container);

    addTimes(this.layers, this.times);

    input_container.onmousewheel = e => {
        for (let i = 0; i < this.layers.length; i += timesNumber) {
            document.getElementById(this.layers[i].name).remove();
        }

        let delta = e.deltaY;
        if (delta < 0) {
            timesNumber -= 1;
            if (timesNumber < timesNumberMin) {
                timesNumber = timesNumberMin;
            }
        }
        else {
            timesNumber += 1;
            if (timesNumber > timesNumberMax) {
                timesNumber = timesNumberMax;
            }
        }

        addTimes(this.layers, this.times);
    };

    parent.onmousedown = () => {
        let pageX = 0;
        document.onmousemove = e => {
            if (pageX !== 0) {
                parent.scrollLeft = parent.scrollLeft + (pageX - e.pageX);
            }
            pageX = e.pageX;
        };
        parent.onmouseup = () => {
            document.onmousemove = null;
            parent.onmouseup = null;
        };
        parent.ondragstart = () => {
            return false;
        };
    };

};

function MyTime(time, format) {
    if (!format) {
        this.time = +time.slice(0, -2);
        this.format = time.slice(-2);
        this.value = time;
    }
    else {
        this.time = +time;
        this.format = format;
        this.value = time + format;
    }
}

function MyTimeInterval(start, end) {
    this.start = start;
    this.end = end;
    this.years = end.time - start.time + 1;
}

var time = new MyTimeInterval(new MyTime('1Ma'), new MyTime('300Ma'));
var times = [];

for (var i = 1; i <= time.years; i += Math.floor(time.years / 52)) {
    times.push(new MyTime(i, time.start.format));
}

function getBaseLayers() {
    let req = getXmlHttp();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let timeline = new MyTimeline(JSON.parse(req.responseText), times);
                timeline.render();
            }
        }
    };
    req.open('GET', '/rest/basemap', true);
    req.send(null);
}

getBaseLayers();