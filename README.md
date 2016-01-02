# Remotely Operated Vehicle Control - rovctl
**Please ensure that you are using `node.js` 4 or later!**

This project is intended to be used as the control for my ROV. It utilizes `Node.js` for the back-end, `JavaScript` to get iOS device's gyroscope axis values, `socket.io` to communicate axis values instantly from client to server, and (soon) `Python 2.7` will be used to accelerate motors with `RPi.GPIO` using PWM.

**Instructions:** Install dependencies

```
npm install express --save
npm install underscore --save
npm install socket.io --save
```
