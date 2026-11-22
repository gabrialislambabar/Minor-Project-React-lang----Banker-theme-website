function Team() {
  const members = [
    {
      name: "Marcus Vance",
      role: "Chief Executive Officer",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "20+ years leading institutional investments and retail banking innovations.",
    },
    {
      name: "Elena Rostova",
      role: "Head of Wealth Management",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Former central bank advisor specializing in global equity and bond markets.",
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Architecting enterprise fintech infrastructure, encryption, and real-time payments.",
    },
    {
      name: "Sophia Martinez",
      role: "Chief Risk & Compliance Officer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Ensuring regulatory compliance, fraud prevention, and audit excellence.",
    },
  ];

  return (
    <section className="team py-5 bg-light" id="team">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-muted mb-2">Leadership</p>
          <h2 className="fw-bold display-5" style={{ color: "#0a1f44" }}>Meet Our Team</h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: "38rem" }}>
            Seasoned financial and tech leaders dedicated to safeguarding and growing your assets.
          </p>
          <div
            className="mx-auto mt-3"
            style={{ width: "60px", height: "3px", backgroundColor: "#0a1f44" }}
          ></div>
        </div>

        <div className="row g-4 justify-content-center">
          {members.map((member) => (
            <div key={member.name} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-3 rounded-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "110px", height: "110px", objectFit: "cover" }}
                />
                <h5 className="fw-bold mb-1" style={{ color: "#0a1f44" }}>{member.name}</h5>
                <p className="text-primary small fw-semibold mb-2">{member.role}</p>
                <p className="text-muted small mb-0">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
