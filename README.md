# Micro frontend arcitecture example
Test app to show micro frontend architecture, by using webpack [module federation plugin](https://webpack.js.org/concepts/module-federation/) 

Example includes 2 separate apps /invoices and /accounting /container is responsible to run them

In current example you can navigate throw invoicing and expanses apps, as a UI component lib im using sumup [circuitUI](https://circuit.sumup.com/)

### How to run
1. install all dependencies from /invoices /accounting and /container folders
2. run ```/invoices```8081 port and ```/accounting``` 8082 port - ```npm start```
3. run ```/container``` - ```npm start```
4. open ```localhost:8080```

