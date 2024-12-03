
import Header from "../Header";
import WhyChoose from "./Landing-page/Why-choose-us";
import Clientreview from "./Landing-page/Clientreview";
import Ourteam from "./Landing-page/Ourteam";
import Appoinment from "./Landing-page/Appoinment";
import Consulting from "./Landing-page/Consulting";
import Footer from "../Footer";
import Business from "./Landing-page/Business";


function Layout() {
    return (
        <>
            <Header />
            <WhyChoose />
            <Business />
            <Clientreview />
            <Ourteam />
            <Appoinment />
            <Consulting />
            <Footer />
        </>
    );
};

export default Layout;