
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Spacing, Heading } from '@sumup/circuit-ui';

const fakeExpenses = [
        {"date":"2018-06-14","lines":[{"description":"ricarica cellulare","grossAmount":10,"categoryId":"office.phone","categoryType":"indirectCost","taxRate":22}],"number":124,"supplierCountry":"IT","totalGrossAmount":10,"currency":"EUR","id":"5b226a90bd34b5001c6fb1c4","unpaidAmount":10,"fileId":"5b226a7ff0dee5001c8f08d1","file":{"type":"image/jpeg","sizeBytes":257837,"lastModified":"2018-06-14T13:15:42.000Z","fileName":"14080993_10210466404239395_441678709_n (1).jpg","id":"5b226a7ff0dee5001c8f08d1","url":"/api/files/5b226a7ff0dee5001c8f08d1/v1","ocr":{"countryCode":"IT","currency":"EUR","grossAmount":10,"boundingBox":[{"x":12,"y":245},{"x":477,"y":247},{"x":474,"y":855},{"x":9,"y":852}],"locale":"it"}}}
        ,
        {"date":"2018-06-13","lines":[{"description":"computer","grossAmount":2000,"categoryId":"office.hardware","categoryType":"indirectCost","taxRate":22}],"supplierCountry":"IT","totalGrossAmount":2000,"currency":"EUR","number":125,"id":"5b226aa9d1bcc8001caf98a0","unpaidAmount":2000}
        ,
        {"date":"2018-05-09","lines":[{"grossAmount":126,"taxRate":0}],"number":123,"supplierCountry":"VG","totalGrossAmount":126,"currency":"EUR","id":"5af2c342c9f1ea001c51afc1","unpaidAmount":45.61,"payments":[{"paymentType":"bank","integrationType":"online","paymentAccountId":"1","id":"5af2c35d5131e6001c3e8cc8","createdDate":"2018-05-09T09:46:05Z","expenseId":"5af2c342c9f1ea001c51afc1","paymentTransactionId":"541906_6265e9fdf83754d2bc42d0a882685177c3657377","amount":-80.39,"currency":"EUR","text":"This right here is some random text (#2)","paymentDate":"2017-06-01","description":"This right here is some random text (#2)"}]}
        ,
        {"date":"2018-04-20","lines":[{"description":"Fornitore","grossAmount":240,"taxRate":22}],"number":118,"supplierId":"56b0b08be59ecd0f00ae7473","supplierName":"fornitore americano","supplierCountry":"IT","totalGrossAmount":240,"currency":"EUR","id":"5ad9e3d0f5bb81001c99b58f","unpaidAmount":240}
        ,
        {"supplierCountry":"IT","date":"2018-04-17","lines":[{"grossAmount":10,"taxRate":22,"description":"Ricarica cellulare","categoryId":"office.phone","categoryType":"indirectCost"}],"number":117,"totalGrossAmount":10,"currency":"EUR","id":"5ad5fdf951794c001c581e5d","unpaidAmount":10,"fileId":"5ad5fce88ed4c3001c0002e2","file":{"type":"image/jpeg","sizeBytes":297946,"lastModified":"2018-04-17T13:55:52.000Z","fileName":"expense.jpg","id":"5ad5fce88ed4c3001c0002e2","url":"/api/files/5ad5fce88ed4c3001c0002e2/v1","ocr":{"countryCode":"IT","currency":"EUR","grossAmount":10,"boundingBox":[{"x":15,"y":209},{"x":478,"y":214},{"x":472,"y":856},{"x":9,"y":852}],"locale":"it"}}}
        ,
        {"date":"2018-04-10","lines":[{"grossAmount":100,"taxRate":22}],"number":116,"supplierCountry":"IT","totalGrossAmount":100,"currency":"EUR","id":"5acc712c074876001c9d3c0b","unpaidAmount":100}
        ,
        {"date":"2018-04-06","lines":[{"description":"nota di credito","grossAmount":-610,"taxRate":22}],"number":115,"supplierCountry":"IT","totalGrossAmount":-610,"currency":"EUR","id":"5ac742a3760676001c49389c","unpaidAmount":-610}
        ,
        {"date":"2018-04-03","lines":[{"grossAmount":690,"taxRate":22}],"supplierCountry":"IT","totalGrossAmount":690,"currency":"EUR","number":119,"id":"5ad9e40edef6ef001c270317","unpaidAmount":690}
        ];  

const expensesList = () => {
    return (
        <>
            <Heading> Expenses list </Heading>
            {fakeExpenses.map( (expense) => {
                return (
                    <Link to="/expense" key={expense.id}>
                        <Spacing bottom>
                            <Row>
                                <Col span="1">{expense.number}</Col>
                                <Col span="6">{expense.lines[0].description || 'test'}</Col>
                                <Col span="2">{expense.date}</Col>
                                <Col span="2">{expense.totalGrossAmount}</Col>
                            </Row>
                        </Spacing>
                    </Link>
                )
            })}
        </>
    );
};

export default expensesList;