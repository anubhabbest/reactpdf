import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0,
      margin: '10px',
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    }, 
    tableCol1: { 
        width: "100%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        
        
      }, 
      tableCol2: { 
        width: "75%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0 
      }, 
    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      fontSize: 10 
    },
    reportTitle:{
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 16,
        textAlign: 'left',
        textTransform: 'uppercase',
        marginLeft: '10px',
        marginTop: '10px',
    }
  });

// Create Document Component
const MyDocument = () => (
    <>
  
    <Document>
    <Page style={styles.body}>
      {/* <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Product</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Type</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Period</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Price</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>React-PDF</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>3 User </Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View> 
        </View> 
      </View> */}

    {/* 2nd table */}
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Abholformular</Text>
    </View>
    <View style={styles.table}> 
     {/* <Text style={{alignContent: 'center'}}>Abholformular</Text> */}

        <View style={styles.tableRow}> 
          
        <View style={styles.tableCol1}> 
            <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>Prüfstandtest beim EDL
            </Text> 
        </View> 
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Ticket ID</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>0</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
          
          
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Prüfstand</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>0</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
          
          
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Gestell-nummer
</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>0</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
         
        </View> 
      </View>
    </Page>
  </Document>
  {/* <button onClick={()=> handleClick()}>click me!</button> */}
  </>
);
export default MyDocument;