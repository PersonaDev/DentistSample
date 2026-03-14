import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { MeetTheTeam } from "@/pages/MeetTheTeam";
import { OfficeTour } from "@/pages/OfficeTour";
import { Reviews } from "@/pages/Reviews";
import { Careers } from "@/pages/Careers";
import { Services } from "@/pages/Services";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { Contact } from "@/pages/Contact";
import { NewPatient } from "@/pages/NewPatient";
import { Finance } from "@/pages/Finance";
import { PreTreatment } from "@/pages/PreTreatment";
import { PostTreatment } from "@/pages/PostTreatment";
import { FAQ } from "@/pages/FAQ";
import { SavingsPlan } from "@/pages/SavingsPlan";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />

        {/* About */}
        <Route path="/about" component={About} />
        <Route path="/about/meettheteam" component={MeetTheTeam} />
        <Route path="/about/officetour" component={OfficeTour} />
        <Route path="/about/reviews" component={Reviews} />
        <Route path="/about/careers" component={Careers} />

        {/* Services */}
        <Route path="/services" component={Services} />
        <Route path="/services/:id" component={ServiceDetail} />

        {/* Resources */}
        <Route path="/resources/newpatient" component={NewPatient} />
        <Route path="/resources/finance" component={Finance} />
        <Route path="/resources/pretreatment" component={PreTreatment} />
        <Route path="/resources/posttreatment" component={PostTreatment} />

        {/* FAQ */}
        <Route path="/faq" component={FAQ} />

        {/* Specials */}
        <Route path="/specials/savingsplan" component={SavingsPlan} />

        {/* Contact */}
        <Route path="/contact" component={Contact} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
