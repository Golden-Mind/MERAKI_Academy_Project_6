import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsUp = ({product,userInfo}) => {
    console.log(userInfo);
	return (
		<WhatsAppWidget
			phoneNo={product.phoneNumber&&product.phoneNumber}
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="40"
			iconColor="white"
			iconBgColor="#42b4ad"
			headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="#42b4ad"
			headerTitle={userInfo.firstName&&userInfo.firstName+" "+userInfo.lastName&&userInfo.lastName}
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			btnBgColor="#42b4ad"
			btnTxtColor="black"
		/>
	);
};

export default WhatsUp;