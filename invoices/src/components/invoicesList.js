
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Spacing, Heading} from '@sumup/circuit-ui';

const fakeInvoices = [
    {"booked":true,"date":"2020-11-20","dueDate":"2020-12-04","customerCountry":"IT","currency":"EUR","customerId":"58331ee88e8d8f11002f2adc","customerName":"Alice Peschini","baseCurrency":"EUR","totalNetAmount":78,"totalTaxAmount":17.16,"totalGrossAmount":73.37,"viewed":false,"sent":false,"companyProfile":{"address":"Via Giuseppe Ripamonti, 25\n20136, Milano (MI)\nMagazzino","taxEnabled":true,"companyNumber":"01043931003","email":"it@example.com","name":"Antins Inc.","cashAccounting":false,"countryCode":"IT","companyType":"Partnership","industry":"Retail (offline)","vatNumber":"02327910581","bankName":"Intesa San Paolo","accountHolderName":"Campo Blanco Cafè srl","bankAccount":"050570111111","swiftCode":"BSP0IT3L","ibanCode":"IT17X0655021000000001234568","bankNumber":"1345789977655448890","telephoneNumber":"0123456789","businessType":"Private","webSite":"www.lebicidiluigi.it","taxRegime":"RF17","firstName":"Luigi","lastName":"Mario","detailedAddress":{"street":"Via Giuseppe Ripamonti","number":"25","zipCode":"20136","city":"Milano","province":"MI","additionalInfo":"Magazzino"},"withheldSocialSecurityRate":8.25,"stampDutyAmount":2,"incomeTaxDeduction":20,"incomeTaxDeductionCategory":"B","incomeTaxDeductionTaxableRate":100,"pensionFundRate":4,"pensionFundType":"INPS","pensionFundCategory":"TC22"},"number":"28/2020","id":"5fb7be90977d12a0cd3eb3fa","type":"invoice","unpaidAmount":73.37,"paid":false,"einvoice":{"status":"ready"},"status":"booked","createdDate":"2020-11-20T13:03:12Z"}
    ,
    {"booked":true,"date":"2020-11-20","dueDate":"2020-12-04","customerCountry":"IT","currency":"EUR","customerName":"Andiy","viewed":false,"sent":false,"number":"27/2020","baseCurrency":"EUR","totalNetAmount":1040,"totalTaxAmount":228.8,"totalGrossAmount":978.3,"companyProfile":{"address":"Via Giuseppe Ripamonti, 25\n20136, Milano (MI)\nMagazzino","taxEnabled":true,"companyNumber":"01043931003","email":"it@example.com","name":"Antins Inc.","cashAccounting":false,"countryCode":"IT","companyType":"Partnership","industry":"Retail (offline)","vatNumber":"02327910581","bankName":"Intesa San Paolo","accountHolderName":"Campo Blanco Cafè srl","bankAccount":"050570111111","swiftCode":"BSP0IT3L","ibanCode":"IT17X0655021000000001234568","bankNumber":"1345789977655448890","telephoneNumber":"0123456789","businessType":"Private","webSite":"www.lebicidiluigi.it","taxRegime":"RF17","firstName":"Luigi","lastName":"Mario","detailedAddress":{"street":"Via Giuseppe Ripamonti","number":"25","zipCode":"20136","city":"Milano","province":"MI","additionalInfo":"Magazzino"},"withheldSocialSecurityRate":8.25,"stampDutyAmount":2,"incomeTaxDeduction":20,"incomeTaxDeductionCategory":"B","incomeTaxDeductionTaxableRate":100,"pensionFundRate":4,"pensionFundType":"INPS","pensionFundCategory":"TC22"},"id":"5fb4e2874ec1bd48aa2d5ae1","type":"invoice","unpaidAmount":978.3,"paid":false,"einvoice":{"status":"ready"},"status":"booked","createdDate":"2020-11-18T08:59:51Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"new invoice","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fcf47f5c064d0e75602c5e0","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-12-08T09:31:33Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"Danil","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fb4e3014ec1bd48aa2d5ae3","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-18T09:01:53Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"Leo","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fb4d5824ec1bd48aa2d5adf","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-18T08:04:18Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"555555","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fb4d4fd4ec1bd48aa2d5add","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-18T08:02:05Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"123","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5face34f6e5f74a302829d9b","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-12T07:25:03Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"asdasdasd","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fac283de4ad372694f30e97","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-11T18:06:53Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"erw","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fac2825e4ad372694f30e95","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-11T18:06:29Z"}
    ,
    {"booked":false,"date":"2020-11-11","dueDate":"2020-11-25","customerCountry":"IT","currency":"EUR","customerName":"123123123","viewed":false,"sent":false,"number":"25/2020","baseCurrency":"EUR","totalNetAmount":0,"totalTaxAmount":0,"totalGrossAmount":0,"id":"5fac27efe4ad372694f30e93","type":"invoice","lines":[{"taxEnabled":true,"taxRate":0,"quantity":0}],"status":"draft","createdDate":"2020-11-11T18:05:35Z"}
];  

const InvoicesList = () => {
    return (
        <>
            <Heading> Invoices list </Heading>
            {fakeInvoices.map( (invoice) => {
                return (
                    <Link to="/invocie" key={invoice.id}>
                        <Spacing bottom>
                            <Row>
                                <Col span="1">{invoice.status}</Col>
                                <Col span="4">{invoice.customerName}</Col>
                                <Col span="2">{invoice.date}</Col>
                                <Col span="2">{invoice.totalGrossAmount}</Col>
                            </Row>
                        </Spacing>
                    </Link>
                )
            })}
        </>
    );
};

export default InvoicesList;