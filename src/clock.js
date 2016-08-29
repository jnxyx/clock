;
(function() {
    function Clock() {
        if (!(this instanceof(Clock))) {
            return new Clock();
        }
        this.timer = null;
        this.now = {
            state: 1,
            isBack: false,
            time: 0,
            day: 0,
            hour: 0,
            minite: 0,
            seconds: 0,
            milliseconds: 0,

        };
        return this;
    }

    Clock.prototype = {
        start: function() {
            var self = this;
            self.timer = setInterval(function() {
                if (self.now.state) {
                    self.now.time = self.now.isBack ? (self.now.time - 1) : (self.now.time + 1);
                    if (self.now.time < 0) {
                        self.now.time = 0;
                    }
                }
                self.setTime();
            }, 10);
        },

        pause: function() {
            this.now.state = 0;
        },

        goon: function() {
            this.now.state = 1;
        },

        reset: function() {
            var self = this;
            if (self.timer) {
                clearInterval(self.timer);
                this.now.state = 1;
                this.now.time = 0;
                this.now.day = 0;
                this.now.hour = 0;
                this.now.minite = 0;
                this.now.seconds = 0;
                this.now.milliseconds = 0;
            }
        },

        setTime: function() {
            var self = this;
            var time = self.now.time;
            self.now.milliseconds = time % 1e2;
            time = (time - self.now.milliseconds) / 1e2;
            self.now.seconds = time % 60;
            time = (time - self.now.seconds) / 60;
            self.now.minite = time % 60;
            time = (time - self.now.minite) / 60;
            self.now.hour = time % 24;
            time = (time - self.now.hour) / 24;
            self.now.day = time;
        }
    };

    this.Clock = Clock;
}).call(this);
