import PageHeader from '@/components/UI/PageHeader';
import BrandingSection from '@/components/Branding/BrandingSection';

export default function BrandingPage() {
  return (
    <>
      <PageHeader 
        title="Brand Profile" 
        description="Configure your organization's visual identity and mission."
      />
      <section className="section">
        <div className="container">
          <BrandingSection />
        </div>
      </section>
    </>
  );
}
