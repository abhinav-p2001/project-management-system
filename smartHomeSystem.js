
// Device Management
function Device(name, type, status = 'off') {
    this.name = name;
    this.type = type;
    this.status = status;
}

// Methods for Device
Device.prototype.turnOn = function() {
    this.status = 'on';
    console.log(`${this.name} is now ON`);
};

Device.prototype.turnOff = function() {
    this.status = 'off';
    console.log(`${this.name} is now OFF`);
};

Device.prototype.checkStatus = function() {
    console.log(`${this.name} is currently ${this.status}`);
};

// Smart Home Management
function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

// Methods for SmartHome
SmartHome.prototype.addDevice = function(device) {
    this.devices.push(device);
    console.log(`${device.name} added to the smart home`);
};

SmartHome.prototype.removeDevice = function(deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
    console.log(`${deviceName} removed from the smart home`);
};

SmartHome.prototype.listDevices = function() {
    console.log(`${this.owner}'s Smart Home Devices:`);
    this.devices.forEach(device => console.log(device.name));
};

// SmartDevice (Inheriting from Device)
function SmartDevice(name, type, brand, connectivity, status = 'off') {
    Device.call(this, name, type, status);  // Call the Device constructor
    this.brand = brand;
    this.connectivity = connectivity;
}

// Inherit from Device
SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

// New methods for SmartDevice
SmartDevice.prototype.updateFirmware = async function() {
    console.log(`Updating firmware for ${this.name}...`);
    try {
        const response = await fetch('https://mockapi.com/updateFirmware');  // Simulated API
        const data = await response.json();
        console.log(`'Firmware update complete:', data`);
    } catch (error) {
        console.error(`'Firmware update failed:', error`);
    }
};

SmartDevice.prototype.checkConnectivity = function() {
    if (this.connectivity) {
        console.log(`${this.name} is connected.`);
    } else {
        console.log(`${this.name} is not connected.`);
    }
};

// SmartLight (Inheriting from SmartDevice)
function SmartLight(name, brand, connectivity, brightness, color, status = 'off') {
    SmartDevice.call(this, name, 'Light', brand, connectivity, status);  // Call SmartDevice constructor
    this.brightness = brightness;
    this.color = color;
}

// Inherit from SmartDevice
SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

// Methods for SmartLight
SmartLight.prototype.adjustBrightness = function(brightness) {
    this.brightness = brightness;
    console.log(`${this.name} brightness set to ${this.brightness}`);
};

SmartLight.prototype.adjustColor = function(color) {
    this.color = color;
    console.log(`${this.name} color set to ${this.color}`);
};

// SmartThermostat (Inheriting from SmartDevice)
function SmartThermostat(name, brand, connectivity, temperature, mode, status = 'off') {
    SmartDevice.call(this, name, 'Thermostat', brand, connectivity, status);  // Call SmartDevice constructor
    this.temperature = temperature;
    this.mode = mode;
}

// Inherit from SmartDevice
SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

// Methods for SmartThermostat
SmartThermostat.prototype.setTemperature = function(temperature) {
    this.temperature = temperature;
    console.log(`${this.name} temperature set to ${this.temperature}°C`);
};

SmartThermostat.prototype.changeMode = function(mode) {
    this.mode = mode;
    console.log(`${this.name} mode set to ${this.mode}`);
};

// User Management
function User(username, password) {
    this.username = username;
    this.password = password;
}

// User authentication (simulated using async/await)
User.prototype.authenticate = async function() {
    console.log(`Authenticating ${this.username}...`);
    try {
        const response = await fetch('https://mockapi.com/authenticate', {  // Simulated API
            method: 'POST',
            body: JSON.stringify({ username: this.username, password: this.password }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        if (data.success) {
            console.log(`${this.username} authenticated successfully!`);
        } else {
            console.log(`'Authentication failed!'`);
        }
    } catch (error) {
        console.error('Authentication failed:', error);
    }
};

// Demonstration
// Creating devices
const light = new SmartLight('Living Room Light', 'Philips', true, 75, 'Warm White');
const thermostat = new SmartThermostat('Living Room Thermostat', 'Nest', true, 22, 'Cool');

// Creating smart home and user
const smartHome = new SmartHome('John');
const user = new User('john_doe', 'password123');

// Demonstrating functionality
user.authenticate();  // Simulated user authentication
smartHome.addDevice(light);
smartHome.addDevice(thermostat);

smartHome.listDevices();

light.turnOn();
light.adjustBrightness(85);
light.adjustColor('Cool White');

thermostat.setTemperature(21);
thermostat.changeMode('Heat');

// Simulate firmware update
light.updateFirmware();

// Checking connectivity
thermostat.checkConnectivity();

