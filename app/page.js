export default function HomePage() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="display-6 fw-bold mb-3">Ready to Start Building?</h2>
              <p className="lead text-muted mb-4">
                This boilerplate provides everything you need to build your next project.
              </p>
              <button 
                type="button" 
                className="btn btn-primary btn-lg px-5"
              
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}