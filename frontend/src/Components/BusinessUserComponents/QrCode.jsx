import { Document, Page, Text, View, StyleSheet, Image, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import backgroundImageUrl from "../../assets/loyaltyprogram_default_background.png"
import Button from '../SmallComponents/Button';
import { useSelector } from 'react-redux';
// import beelogo from "../../../public/beeicon.png";
// import qrcodeexample from "../../assets/qrcodeexample.png";


// Styles for PDF
const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
  },
  pageBackgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  pdfViewer: {
    width: "100%",
    height: "100vh",
  },
  page: {
    top: "0px",
    position: "absolute",
    height: "841px",
    width: "100%",
    backgroundColor: "#606060",
  },
  headingPrimary: {
    
    paddingTop: "10px",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  headingPrimary2: {
    
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    
  },
  styledqrcode: {
    width: '230px',
    height: '230px',
    //marginBottom: 10,
    marginTop: '382px',
    marginLeft: '183px',
  }, 
  
  image: {
    width: '150px',
    position: 'absolute',
   
    //marginLeft: '50px',
    marginLeft: '200px',
  
  },

});

import PropTypes from 'prop-types';

const TextToPDF = ({ website, qrCode, logo}) => (
  <Document>
    <Page size="A4" style={{ ...styles.page }}>
      <View style={styles.pageBackgroundContainer}>
        <Image src={backgroundImageUrl} style={styles.imageBackground} />
      </View>
      <Image src={qrCode} style={styles.styledqrcode} />
      
      {/* <Image src={qrcodeexample} style={styles.styledqrcode} /> */}
      <Text style={styles.headingPrimary}>
      Terms& Conditions:
        </Text>
      <Text style={styles.headingPrimary2}>
        {website}
      </Text>
      
      <Image src={logo} style={styles.image} />
      {/* <Image src={beelogo} style={styles.image} /> */}
    </Page>
  </Document>
);

TextToPDF.propTypes = {
  website: PropTypes.string.isRequired,
  qrCode: PropTypes.string.isRequired, 
  logo: PropTypes.string.isRequired,
    //businessName: PropTypes.string.isRequired,
};

const QrCode = () => {
  const CustomerUser = useSelector(state => state.customer.userCustomerData);
  const website = CustomerUser.customer_user_profile.website;
  const qrcode = CustomerUser.customer_user_profile.qr_code;
  const logo = CustomerUser.customer_user_profile.logo;
 // const businessName = CustomerUser.customer_user_profile.business_name;
 //const qrcode = localStorage.getItem('qrCode'); // Retrieve QR code from local storage

  const pdfData = <TextToPDF website={website} qrCode={qrcode} logo={logo} />; 

  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
    <div className="flex flex-col items-center">
          <div className='mb-8'>
            <a href={qrcode} download="qr_code_beesmart.png">
            <Button>Download QR code only</Button>
            </a>
            </div>
          
            <PDFDownloadLink document={pdfData} fileName="beesmart_qrcode.pdf" 
            className="btn bg-secondary btn-md-wide px-20 text-base-100">
              {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
            </PDFDownloadLink>
          
        </div>
        {/* <div>
          <PDFViewer width={400} height={600}>
            {pdfData}
          </PDFViewer>
        </div> */}
      </div>
    
  );
};

export default QrCode;


