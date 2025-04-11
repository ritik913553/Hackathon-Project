import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to Mentor Connect</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Connect with mentors, collaborate on projects, and grow your skills in a supportive community.
          </p>
        </section>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Find Mentors</h2>
            <p>Connect with experienced professionals who can guide you in your learning journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Join Groups</h2>
            <p>Collaborate with peers who share similar interests and goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Work on Projects</h2>
            <p>Apply your skills to real-world projects and build your portfolio.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}