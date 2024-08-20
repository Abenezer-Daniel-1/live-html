# Live HTML

A simple lightweight CLI tool built as a Node JS package to be a direct substitute to the Live Server extension available in VS code.

Serve your HTML locally and with hot reload to increase your productivity by using Live HTML.

## Quickstart

**1. Install the package.**

Make sure to install the package globally so that you can use it whenever you want, wherever you want without downloading it again and again.

```shell
npm install -g live-html
```

**2. Move to your project folder.**

Open a terminal window where your current working directory is located.

```shell
cd path/to/your/project
```

**3. Launch the server 🚀**

Launch the server on a free port. Good options would be ports starting from 2000, 3000, 4000 and 5000.

Please make sure to follow the format below.

```shell
live-html port-number
```

### Example
```shell
live-html 5500
```

**4. Open the port in a browser and go to the path of your HTML file.**

```
http://localhost:5500/path/to/your/file
```

### Example

If your HTML file is located in a path similar to this: pages/about.html. Then you would open the below URL in your browser.

```
http://localhost:5500/pages/about.html
```

> [!NOTE]
> If your HTML file is called index.html, then you don't need to enter index.html, just a "/" would be enough.

Now when you make changes to your HTML file, it should reflect in the browser without the need for refresh.

