import AppContextAppiProvide from "../ContextApi/AppContextApi";
import AuthContextApiProvider from "../ContextApi/AuthContextApi";
import BlogContextApiProvider from "../ContextApi/BlogContextApi";
import BuilderContextAppiProvide from "../ContextApi/BuilderContextApi";
import CityContextAppiProvide from "../ContextApi/CityContextApi";
import FillterContextAppiProvide from "../ContextApi/FillterContext";
import ProjectContextApiProvider from "../ContextApi/ProjectContextApi";
import UserDashBoardContextApi from "../ContextApi/UserDashBoardContextApi";
import AdminContextApiProvider from "../ContextApi/adminContextApi";
import EnquireyContextAppiProvide from "../ContextApi/enquireyContectApi";
import HomeProjectContextApi, {
  HomePageProjectContext,
} from "../ContextApi/userinterface/HomeProjectContextApi";
import ListingContextAppiProvide from "../ContextApi/userinterface/ListingContextApi";
import UIBlogContextApiProvider from "../ContextApi/userinterface/UiBlogContectApi";
import "../styles/globals.css";
import ErrorBoundary from "./ErrorBoundary";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary>
        <AuthContextApiProvider>
          <UserDashBoardContextApi>
            <FillterContextAppiProvide>
              <ProjectContextApiProvider>
                <BlogContextApiProvider>
                  <AppContextAppiProvide>
                    <CityContextAppiProvide>
                      <BuilderContextAppiProvide>
                        <ListingContextAppiProvide>
                          <UIBlogContextApiProvider>
                            <EnquireyContextAppiProvide>
                              <AdminContextApiProvider>
                                <HomeProjectContextApi>
                                  <Component {...pageProps} />;
                                </HomeProjectContextApi>
                              </AdminContextApiProvider>
                            </EnquireyContextAppiProvide>
                          </UIBlogContextApiProvider>
                        </ListingContextAppiProvide>
                      </BuilderContextAppiProvide>
                    </CityContextAppiProvide>
                  </AppContextAppiProvide>
                </BlogContextApiProvider>
              </ProjectContextApiProvider>
            </FillterContextAppiProvide>
          </UserDashBoardContextApi>
        </AuthContextApiProvider>
      </ErrorBoundary>
    </>
  );
}
