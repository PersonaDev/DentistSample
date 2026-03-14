import { useParams } from "wouter";
import { Link } from "wouter";
import { RESOURCES } from "@/lib/data";
import { ArrowLeft, Download, FileText, MonitorPlay, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ResourceDetail() {
  const { id } = useParams();
  const resource = RESOURCES.find(r => r.id === id);

  if (!resource) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Resource not found</h1>
        <Link href="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const renderIcon = () => {
    switch (id) {
      case "financial": return <CreditCard className="w-12 h-12 text-primary" />;
      case "forms": return <FileText className="w-12 h-12 text-primary" />;
      case "videos": return <MonitorPlay className="w-12 h-12 text-primary" />;
      default: return <FileText className="w-12 h-12 text-primary" />;
    }
  };

  return (
    <div className="w-full pt-12 pb-24 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              {renderIcon()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {resource.title}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {resource.content}
          </p>
        </div>

        <div className="bg-muted p-8 md:p-12 rounded-[2rem] border border-border/50 shadow-sm">
          {id === "forms" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold">New Patient Registration</h3>
              <p className="text-muted-foreground">Please download, print, and fill out these forms before your first appointment to expedite your check-in process.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" className="bg-white gap-2 justify-start px-6"><Download className="w-4 h-4" /> Patient Info Form (PDF)</Button>
                <Button variant="outline" className="bg-white gap-2 justify-start px-6"><Download className="w-4 h-4" /> Medical History Form (PDF)</Button>
                <Button variant="outline" className="bg-white gap-2 justify-start px-6"><Download className="w-4 h-4" /> Privacy Policy (PDF)</Button>
              </div>
            </div>
          )}

          {id === "financial" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Insurance & Payment</h3>
              <p className="text-muted-foreground">We accept most major PPO insurance plans. As a courtesy to you, we will bill your insurance company and track claims. Please keep us informed of any changes to your insurance plan. You are responsible for the fees charged by our office, no matter what your insurance coverage may be.</p>
              <h4 className="text-xl font-bold mt-4">We Accept:</h4>
              <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-2">
                <li>Cash & Personal Checks</li>
                <li>Visa, MasterCard, American Express, Discover</li>
                <li>CareCredit (Interest-free financing)</li>
              </ul>
            </div>
          )}

          {id === "videos" && (
            <div className="flex flex-col gap-6 text-center py-12">
              <MonitorPlay className="w-16 h-16 text-muted-foreground/30 mx-auto" />
              <h3 className="text-2xl font-bold">Video Library</h3>
              <p className="text-muted-foreground">Educational videos are currently being updated. Check back soon for new content about our procedures and dental technology.</p>
            </div>
          )}

          {id === "education" && (
            <div className="flex flex-col gap-6 text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto" />
              <h3 className="text-2xl font-bold">Educational Articles</h3>
              <p className="text-muted-foreground">Our comprehensive patient education library is being updated. Please ask our team during your visit if you have specific questions about oral hygiene routines.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
