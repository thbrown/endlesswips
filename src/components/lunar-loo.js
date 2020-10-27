import React from "react";

export default class LunarLooEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="mb-3">
            <h5 className="text-bold text-capfirst">title</h5>
            <div className="entry">Electrostatic Throne</div>
          </div>
          <img
            className="img-fluid"
            src="https://d253pvgap36xx8.cloudfront.net/challenges/submissions/image/4662a140dffe11eaa39aaec671a4313d.jpg"
          ></img>
          <div className="mb-3">
            <h5 className="text-bold text-capfirst">short description</h5>
            <div className="entry">
              Attract waste with electrostatic force; use centripetal force to
              keep it there.
            </div>
          </div>

          <div className="mb-3">
            <h5 className="text-bold">
              Please provide an overview of your proposed design concept for a
              lunar toilet.
            </h5>
            <div className="entry">
              <div>
                <div className="editor-content">
                  <h1>The Electrostatic Throne</h1>
                  <h2>Overview</h2>
                  <p>
                    The design utilizes electrostatic attraction and centripetal
                    force to attract and hold waste.&nbsp;
                  </p>
                  <p>
                    Both male and female crew members will use the toilet in the
                    same way they use a traditional western earth-bound toilet
                    (sitting-only for males). This results in intuitive
                    use.&nbsp;
                  </p>
                  <p>
                    The waste is collected in a removable bag that closes
                    automatically when the crew member turns off the toilet or
                    in the event of a power failure. The toilet employs
                    seat-belt-like straps to keep crew members on the toilet
                    without needing to hold on with their hands. The belts can
                    be stowed in two compartments in the toilet's base when not
                    in use; these compartments also hold removable bags and
                    other toilet hygiene products. The base of the toilet bottom
                    is flat so it can be placed on the ground in lunar gravity
                    or attached to some other surface.
                  </p>
                  <figure className="image">
                    <img
                      alt="Three parts of the toilet base, can, and lid"
                      src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/07/10/assembly_.jpg"
                    ></img>
                    <figcaption>
                      Toilet and sub-components<br></br>Base (left), Can (bottom
                      right), Lid (top right)
                    </figcaption>
                  </figure>
                  <h2>Usage procedure</h2>
                  <p>A typical use of the toilet is described below.&nbsp;</p>
                  <h3>Using the toilet</h3>
                  <p>To use the toilet, a crew member:</p>
                  <ol>
                    <li>
                      Removes the attached belt from the storage compartment
                      under the toilet.
                    </li>
                    <li>
                      "Sits" on the toilet (or, in the case of vomiting, holds
                      the toilet seat with their hands).
                    </li>
                    <li>Fastens themselves to the toilet with belt.</li>
                    <li>Powers on the toilet.</li>
                    <li>
                      Expels waste.
                      <ol>
                        <li>
                          Optionally uses hygiene products contained in stowage
                          compartments.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <figure className="image">
                    <img
                      alt="Crew member using the toilet"
                      src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/01/UsageAnnotated.jpg"
                    ></img>
                    <figcaption>Crew member using the toilet</figcaption>
                  </figure>
                  <h3>Cleanup</h3>
                  <p>After expelling waste, a crew member:</p>
                  <ol>
                    <li>
                      Powers off the toilet.
                      <ol>
                        <li>
                          Friction slows spinning, and spring-loaded arms seal
                          waste bag.
                        </li>
                      </ol>
                    </li>
                    <li>Opens the hatch on the side of the device.</li>
                    <li>Removes the can and the attached lid.</li>
                    <li>Removes the lid from the can.</li>
                    <li>Ties the bag.</li>
                    <li>
                      Pulls back and latches the arms.
                      <ol>
                        <li>
                          Arms are mechanically bound, so pulling back one arm
                          also moves the three other arms.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Removes the bag from the can and places into storage.
                      <ol>
                        <li>
                          Waste could be stored for medical or scientific
                          evaluation or reuse, or ejected.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/01/CleanupAnnotated.jpg"></img>
                    <figcaption>Cleanup</figcaption>
                  </figure>
                  <h2>Preparation for next use</h2>
                  <p>After removing the used bag, the crew member:</p>
                  <ol>
                    <li>
                      Places a new bag inside the can, just like changing a
                      trash bag.
                    </li>
                    <li>Unlatches the arms.</li>
                    <li>Attaches the lid to the can.</li>
                    <li>Slides the lid/can assembly into the base.</li>
                    <li>Closes the hatch.</li>
                    <li>Cleans the seat belt (if necessary).</li>
                    <li>
                      Stores the belt in the compartment at the base of the
                      toilet.
                      <ol>
                        <li>
                          When the compartment doors are closed, the belts are
                          sanitized with UV light.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/01/SetupAnnotated.jpg"></img>
                    <figcaption>Toilet preparation</figcaption>
                  </figure>
                  <h3>Diagram</h3>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/15/image___.jpg"></img>
                    <figcaption>
                      Detailed view of the underside of the toilet (bottom cover
                      hidden)
                    </figcaption>
                  </figure>
                  <h3>Benefits over existing solutions</h3>
                  <p>
                    This design has the following benefits over existing
                    solutions:
                  </p>
                  <ul>
                    <li>Lower power consumption</li>
                    <li>Less noisy</li>
                    <li>Eliminates crew exposure to a vacuum</li>
                    <li>Requires no water</li>
                    <li>
                      Relatively compact - volume of 0.11 m<sup>3</sup>
                    </li>
                    <li>
                      Lightweight - most of the toilet is empty space for
                      accommodating waste
                    </li>
                    <li>
                      Fewer points of failure due to the lack of extensive
                      plumbing and relatively small number of components
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h5 className="text-bold">
              Please upload an image of your design.
            </h5>
            <div className="entry">
              <a
                href="https://d253pvgap36xx8.cloudfront.net/formsbuilder/files/2f3f92dcc0e311eaaacf8a35d83c513f/OpenSide.PNG"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="image-field img-fluid"
                  src="https://d253pvgap36xx8.cloudfront.net/formsbuilder/files/2f3f92dcc0e311eaaacf8a35d83c513f/OpenSide.PNG"
                  title="OpenSide.PNG"
                ></img>
              </a>
            </div>
          </div>

          <div className="mb-3">
            <h5 className="text-bold">
              Please discuss in detail how your design will: (i) work in both
              microgravity and lunar gravity, (ii) accommodate female and male
              crew, (iii) be easy to use and maintain, with low noise, low odor,
              and fast turnaround time, (iv) allow for transfer of collected
              waste to storage or external vehicle disposal
            </h5>
            <div className="entry">
              <div>
                <div className="editor-content">
                  <h1>Toilet function in microgravity and lunar gravity</h1>
                  <p>
                    Powering on the toilet engages a Van der Graaf machine in
                    the toilet's base to generate a high voltage electric
                    charge. Positive charge will flow to the conducting toilet
                    seat. Negative charge will flow to the base of the can.
                    Since the crew member is in contact with the charged toilet
                    seat, that crew member, as well as his or her waste, will
                    also become positively charged. The voltage gradient between
                    the bottom of the can and the crew member produces an
                    attractive force that will lure the waste into the bag-lined
                    can.&nbsp;
                  </p>
                  <p>
                    By design, waste that comes into contact the can will
                    rapidly begin to lose its positive charge. &nbsp;Like
                    household trash bags, waste bags in this toilet are made out
                    of polyethylene. The dielectric strength of low density
                    polyethylene is{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://hypertextbook.com/facts/2009/CherryXu.shtml"
                      target="_blank"
                    >
                      21.7 MV/m
                    </a>
                    . A bag thickness of 1 mil (0.0254 mm) gives a breakdown
                    voltage of just over 500V, several orders of magnitude below
                    the voltage produced by Van der Graaf machine (typically in
                    the 100s of kV). Therefore, the waste bags should not
                    meaningfully inhibit conduction between the charged
                    terminals.
                  </p>
                  <p>
                    The benefit of not lining the base of the can with a better
                    insulator is that it prevents excessive static charge build
                    up between charged terminals that may pose an electrical
                    safety hazard. The drawback, of course, is that waste that
                    reaches the bottom of the can loses its charge and therefore
                    most of its attractive force. Although human waste is
                    <a
                      rel="nofollow noreferrer"
                      href="https://www.britannica.com/science/feces"
                      target="_blank"
                    >
                      {" "}
                      largely made up of water{" "}
                    </a>
                    which will maintain a small attractive force to charged
                    objects because of its polarity, this force will likely not
                    be sufficient to hold the waste safely.&nbsp;
                  </p>
                  <p>
                    To secure the waste, the toilet utilizes centripetal force
                    and a can with concave sides. Powering on the device will
                    spin the can along its vertical axis. The spinning produces
                    an outward force on any waste that comes into contact with
                    the can. Waste will then flow to the outside of the can and
                    remain contained due to the can's shape. Because the can is
                    closed on the bottom, the shape of the can allows operation
                    in both microgravity and lunar gravity. This shape provides
                    13 liters of waste storage in micro gravity and even more in
                    lunar gravity. &nbsp;
                  </p>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/07/31/ToiletDesign_.png"></img>
                    <figcaption>
                      Cross section of can operation in different gravitational
                      environments
                    </figcaption>
                  </figure>
                  <h1>Female and male crew</h1>
                  <p>
                    Both male and female crew members will use the toilet in the
                    same way they use a traditional western toilet (sitting-only
                    for males). The spray pattern difference between sexes
                    sitting on the toilet should not affect the toilet's
                    function.
                  </p>
                  <p>
                    There is not any difference in male and female urine, feces,
                    or vomit particle size and composition. Menses have a
                    similar enough particle size and composition to urine,
                    feces, and diarrhea, so because the toilet can capture these
                    waste types, it can also capture&nbsp;menses.
                  </p>
                  <h1>Easy to use and maintain</h1>
                  <p>
                    A traditional western toilet is familiar to crew members and
                    therefore will be easy to use.&nbsp;
                  </p>
                  <p>
                    The toilet has relatively few components, so it is unlikely
                    to require maintenance.
                  </p>
                  <h2>Noise</h2>
                  <p>
                    Elimination of a traditional space-toilet vacuum component
                    results in major noise reduction. Since the toilet doesn't
                    need to drive a fan, the motors that produce the centripetal
                    force and that engage the Van der Graaf generator turn at
                    much lower RPM (rotations per minute), reducing noise.&nbsp;
                  </p>
                  <p>
                    Though I was unable to find an exact statistic for the noise
                    level of a Van der Graaf generator,{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://youtu.be/F28hOSjJDX8?t=94"
                      target="_blank"
                    >
                      videos
                    </a>{" "}
                    suggest that their operational volume (without shock noises)
                    are well below human conversation level (60db). If required,
                    further sound reduction could be achieved by encasing the
                    generator with sound insulating materials.
                  </p>
                  <h2>Odor</h2>
                  <p>
                    Waste bags are changed after each use. Since, with normal
                    use, the bag is the only part of the toilet that comes into
                    contact with waste, odor between uses should be very small.
                    &nbsp;In case of accidents (bag tears, spray) the parts of
                    the toilet most at risk from being soiled - the can and the
                    lid - can be detached from the toilet for cleaning.
                  </p>
                  <p>
                    Electrostatic force has an outsized effect on smaller
                    particles that can cause odor; you can verify this
                    mathematically with the calculator in the next section. This
                    is why electrostatic filters such as N95 masks are effective
                    at filtering small particles. The active electrostatic
                    system should attract small waste particles and reduce odor
                    during active toilet use.
                  </p>
                  <p>
                    When the toilet is powered off, the shrinking centripetal
                    force allows the spring loaded arms attached to the can to
                    seal the waste bag and prevent waste and odor from escaping
                    the toilet. The sealed waste bag should effectively contain
                    all waste and odor.
                  </p>
                  <h2>Turnaround time</h2>
                  <p>
                    It takes me about 90 seconds to empty the small trash bag
                    next to my desk and replace it with a fresh one; my wife
                    says I'm slow.
                  </p>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h5 className="text-bold">
              Please discuss in detail how your design will: (i) capture and
              contain urine, feces, vomit, diarrhea, and menses, (ii) Stabilize
              urine, (iii) accommodate simultaneous urination and defecation,
              (iv) accommodate the needs of 2 crew members for 14 days, (v)
              accommodates the use of toilet hygiene products, (vi) clears
              previous waste content prior to next use, (vii) defines how often
              the collections system must be replaced or disposed of in the
              mission
            </h5>
            <div className="entry">
              <div>
                <div className="editor-content">
                  <h1>Waste capture and containment</h1>
                  <h2>Capture</h2>
                  <p>Three forces can draw waste products into the can:</p>
                  <ol>
                    <li>Waste expulsion force</li>
                    <li>Gravity</li>
                    <li>Electrostatic force</li>
                  </ol>
                  <p>
                    Waste expulsion force is not reliable for all waste types.
                    Gravity is only relevant in a lunar environment. Therefore,
                    the design depends upon electrostatic force.
                  </p>
                  <h3>Electrostatic force</h3>
                  <p>
                    The toilet consists of two separated charged surfaces,
                    similar to an electrical capacitor. Therefore, we can
                    approximate the force between the disk-shaped terminals
                    using{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="http://www-eng.lbl.gov/~shuman/XENON/REFERENCES&amp;OTHER_MISC/electric_forces.pdf"
                      target="_blank"
                    >
                      this formula
                    </a>
                    :
                  </p>
                  <blockquote>
                    <p>
                      (ε<sub>0</sub>AV<sup>2 </sup>/ 2d<sup>2 </sup>)&nbsp;
                      <sup> </sup>(1 + 2d/ D)&nbsp;
                    </p>
                    <p>
                      ε<sub>0</sub> - permeability of freespace (8.85 * 10
                      <sup>-12</sup> Nm/C<sup>2</sup>)
                    </p>
                    <p>
                      A - area of the plates (0.785 m<sup>2</sup>)
                    </p>
                    <p>V - voltage between the plates (160kV)</p>
                    <p>d - distance between the plates (0.28 m)</p>
                    <p>D - diameter of the surfaces (0.5 m)</p>
                    <p>
                      <i>
                        Non-constant values are derived from the geometry of the
                        toilet, except for the voltage.&nbsp;
                      </i>
                    </p>
                    <p>
                      <a
                        rel="nofollow noreferrer"
                        href="https://www.amazon.com/Arbor-Scientific-Van-Graaff-Generator/dp/B000701B1A"
                        target="_blank"
                      >
                        <i>Commercial Van der Graaf generators</i>
                      </a>
                      <i>
                        {" "}
                        produce ~350kV. &nbsp;An ad-hoc 125kV Van der Graaf
                        generator{" "}
                      </i>
                      <a
                        rel="nofollow noreferrer"
                        href="http://www.electrostatics.org/images/ESA_2015_I1_Stevenson.pdf"
                        target="_blank"
                      >
                        <i>has proven operational </i>
                      </a>
                      <i>
                        on the ISS. So, 160kV was chosen as an achievable
                        voltage resulting in worst-case capacitor discharge
                        energy at ~0.32 joules (see Safety section).
                      </i>
                    </p>
                  </blockquote>
                  <p>
                    Therefore,{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://www.google.com/search?safe=active&amp;sxsrf=ALeKk03-E2nQdbr99F-_CTw9ikqXGrEoOg%3A1597515553503&amp;ei=ISc4X72THsa8tAbY-aK4BA&amp;q=%28%288.85*10%5E%28-12%29%29%28.785%29%28160000%5E2%29%2F%282%28.28%5E2%29%29%281+%2B+2%28.28%29%2F.5%29&amp;oq=%28%288.85*10%5E%28-12%29%29%28.785%29%28160000%5E2%29%2F%282%28.28%5E2%29%29%281+%2B+2%28.28%29%2F.5%29&amp;gs_lcp=CgZwc3ktYWIQAzoECAAQR1D-gQFYqZoBYMKcAWgAcAF4AIABRIgBtwGSAQEzmAEAoAEBqgEHZ3dzLXdpesABAQ&amp;sclient=psy-ab&amp;ved=0ahUKEwj9p9uY6Z3rAhVGHs0KHdi8CEcQ4dUDCAw&amp;uact=5"
                      target="_blank"
                    >
                      the toilet generates
                    </a>{" "}
                    <strong>2.4 Newtons</strong>
                    <i>.</i>
                  </p>
                  <p>
                    This is an approximation of the force acting on the human,
                    but not of the forces acting on the waste. Waste has a
                    different capacitance for charge based on its size and
                    shape. Once expelled, the electrostatic charge applies two
                    distinct forces to the waste:
                  </p>
                  <ol>
                    <li>
                      Repulsive force: positive charges in the body and waste
                      repel each other, forcing the waste into the can.
                    </li>
                    <li>
                      Attractive force: negatively charged can attracts the
                      positively charged waste.
                    </li>
                  </ol>
                  <p>
                    Because of the principal of superposition, these forces can
                    be summed to determine the net force acting on the
                    waste.&nbsp;
                  </p>
                  <p>&nbsp;</p>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/01/Switched.png"></img>
                    <figcaption>
                      Electrostatic forces acting on waste
                    </figcaption>
                  </figure>
                  <p>
                    Peak force is applied at the two most important moments:
                    right after waste leaves the crew member (so it moves in the
                    correct direction) and right before it makes contact with
                    the can (to ensure good contact with the can's
                    bottom).&nbsp;
                  </p>
                  <p>
                    Using Coulomb's law, the equation for{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="http://hyperphysics.phy-astr.gsu.edu/hbase/electric/capsph.html"
                      target="_blank"
                    >
                      capacitance of an isolated sphere
                    </a>
                    , and some simplifying assumptions, we can estimate the
                    force on waste particles of any size at different voltage
                    levels and at various positions within the toilet.
                  </p>
                  <p>
                    <strong>Simplifying Assumptions:</strong>
                  </p>
                  <ul>
                    <li>Waste is conducting</li>
                    <li>
                      Density of waste is the same as the density of water
                    </li>
                    <li>
                      All charges behave as point charges. In reality, we have a
                      disk charge (can base), an approximate point charge
                      (waste), and a whatever-shape-a-human-bottom is charge.
                    </li>
                    <li>
                      Waste is a spherical droplet. This is accurate for smaller
                      waste (e.g., urine droplets), but less accurate for larger
                      waste (e.g., feces).
                    </li>
                  </ul>
                  <p>
                    The calculator below quantifies electrostatic forces for
                    waste particles.
                  </p>
                  <iframe
                    frameborder="0"
                    height="500px"
                    scrolling="no"
                    src="https://thbrown.github.io/lunar-iframe/"
                    width="400px"
                  >
                     
                  </iframe>
                  <p>
                    After experimenting with the calculator, we draw two
                    conclusions:
                  </p>
                  <ol>
                    <li>
                      The acceleration is greater on smaller particles than on
                      larger particles.
                    </li>
                    <li>
                      There is relatively little force when the waste is in the
                      middle of the can (furthest from the charged terminals),
                      but moderately significant force at the ends. For example,
                      1cm radius waste sphere will experience ~1.2 m/s
                      <sup>2</sup> of acceleration when within 1cm of the crew
                      member or from the base of the can. That's ~12% of Earth's
                      gravitational force, which plays a significant role in the
                      motion of the waste, especially with limited gravitational
                      forces at play.
                    </li>
                  </ol>
                  <h2>Containment</h2>
                  <p>
                    Once waste comes into contact with the can's bottom,
                    friction causes the waste particles to move in the same
                    direction as the spinning can. This imparts a centripetal
                    force on the waste and traps it on the outside of the
                    can.&nbsp;
                  </p>
                  <p>
                    Splashback is a concern, but it is mitigated by two factors:
                  </p>
                  <ol>
                    <li>
                      Splashback magnitude is{" "}
                      <a
                        rel="nofollow noreferrer"
                        href="https://splashlab.org/2013/11/06/urinal-dynamics-a-tactical-guide/"
                        target="_blank"
                      >
                        reduced when liquid approaches a contact surface at an
                        angle
                      </a>
                      . The angle from the crew member to the can is almost
                      always not 90 degrees because of the angle at which humans
                      urinate.
                    </li>
                    <li>
                      Although waste will begin to lose its positive charge when
                      it contacts the can's surface, it will{" "}
                      <a
                        rel="nofollow noreferrer"
                        href="https://www.scientificamerican.com/article/static-electricity-bring-science-home/"
                        target="_blank"
                      >
                        still maintain some attraction to the charged surface
                      </a>{" "}
                      of the can because of water's polarity.
                    </li>
                  </ol>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/03/CanTopDown.png"></img>
                    <figcaption>
                      Top-down view of waste coming into contact with the side
                      of the can
                    </figcaption>
                  </figure>
                  <p>
                    Though the centripetal action is the primary force holding
                    the waste, the cohesion and adhesion of the waste and the
                    bag will also assist.
                  </p>
                  <h2>Urine stabilization</h2>
                  <p>
                    The toilet mixes waste materials, but during long space
                    flights, separation and reuse may be essential. The design
                    allows for separation using the principles of a separation
                    toilet via three modifications:
                  </p>
                  <p style={{ marginLeft: "2rem" }}>
                    1. An additional inner can for dedicated collection of
                    non-urine waste.
                  </p>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/16/image.jpg"></img>
                    <figcaption>Inner can with additional arms</figcaption>
                  </figure>
                  <p style={{ marginLeft: "2rem" }}>
                    2. A toilet seat insert which positions the user properly to
                    ensure waste ends up in the proper can.<br></br>&nbsp;
                  </p>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/16/image_.png"></img>
                    <figcaption>
                      Top down view of toilet with separation modifications
                    </figcaption>
                  </figure>
                  <p style={{ marginLeft: "2rem" }}>
                    3. Updated crew member operations. Crew members will:
                  </p>
                  <ol>
                    <li style={{ marginLeft: "4rem" }}>
                      Add urine stabilizing chemical agents to the urine
                      compartment after powering on the toilet but before using
                      it. This can be automated.
                    </li>
                    <li style={{ marginLeft: "4rem" }}>
                      Seal waste bags two times when emptying.
                    </li>
                  </ol>
                  <figure className="image">
                    <img src="https://lh6.googleusercontent.com/JGk_jS5OSnJU49yigVsIw_jzEPJ5ONSLhRHl4koW3rNblP0xTynUjANbpitjp-KwJ4-dyeqa969ysEiI2Y9aMHZvDLHcyMPRVJDfReMbM6ckdq8nE1jcgvY-Ua_0LEyXRh4du1Wv"></img>
                    <figcaption>
                      Modified emptying procedure:<br></br>A) Waste deposited in
                      two separate compartments<br></br>B) Arms close, sealing
                      compartments from each other and the exterior; first seal
                      is made<br></br>C) Top arms are opened; second seal is
                      made<br></br>D) Bottom arms are opened; waste bags removed
                      for transfer to waste processing/storage
                    </figcaption>
                  </figure>
                  <h2>Other considerations</h2>
                  <p>
                    Electrostatic forces are sufficient to attract both urine
                    and feces, supporting simultaneous urination and defecation.
                  </p>
                  <p>
                    The toilet supports disposal of toilet hygiene objects,
                    which have smaller attractive forces than waste particles
                    but have reliable downward force from the crew member's
                    hand. The asymmetry caused by adding toilet hygiene objects
                    or feces to the spinning can will result in vibration, but
                    this is acceptable because the can spins at a low RPM.
                  </p>
                  <p>
                    This toilet can accommodate use by 2 crew members for 14
                    days. Waste is stored in bags, so mission length is not
                    limited by toilet capacity, but rather by external waste
                    storage capacity.
                  </p>
                  <p>
                    Previous waste content is removed by the crew member via
                    waste bag prior to next use. Waste bags can be stored for
                    medical or scientific evaluation. They can also be ejected.
                  </p>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h5 className="text-bold">
              Please discuss the safety measures in place to ensure that during
              nominal use or in the event of a system failure: (i) crew handling
              of waste materials during maintenance or system use is minimized,
              (ii) crew members are not exposed to vacuum
            </h5>
            <div className="entry">
              <div>
                <div className="editor-content">
                  <h1>Crew handling of waste</h1>
                  <p>
                    The arms of the can are slightly off-center. The
                    off-centered arms allow spinning to produce an outward force
                    on the four arms. Because the arms are on the outside of the
                    waste bag, the whole assembly acts as centripetal "valve" on
                    the bag that is open when the can is spinning and closed
                    when the can is not. In case of unexpected power loss (and
                    lack of spin), the centripetal valve will close off the
                    waste bag to the outside world. Even in nominal use,
                    powering off the toilet seals the waste bag so crew members
                    do not handle the waste materials.
                  </p>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/07/10/CanOpenAndClosed.jpg"></img>
                    <figcaption>
                      Toilet can in the closed configuration (left, not
                      spinning) and open configuration (right, spinning). Bag
                      not pictured.
                    </figcaption>
                  </figure>
                  <h2>Exposure to vacuum</h2>
                  <p>Crew members cannot be exposed to a vacuum.</p>
                  <h1>Other hazards</h1>
                  <h2>Electrical hazards</h2>
                  <p>
                    In lieu (ha ha) of the vacuum, the electrostatic system
                    produces some hazards of its own. The high voltages, but low
                    current, produced by the Van Der Graaf generator itself{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://www.flinnsci.com/api/library/Download/55117bbd809b4730a34e5c3c2335fc31"
                      target="_blank"
                    >
                      are not considered medically dangerous to healthy adults
                    </a>
                    . However, there are a few important safety issues to
                    address.
                  </p>
                  <h3>Catastrophic capacitor discharge hazard</h3>
                  <p>
                    First and foremost, static charge from the generator built
                    up in a high voltage capacitor (like our toilet setup) can
                    be dangerous (e.g., a Leyden jar). Estimates for the maximum
                    safe electrical energy discharge via capacitor vary from{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://spark.iop.org/van-de-graaff-generator-safety#gref"
                      target="_blank"
                    >
                      1 joule
                    </a>{" "}
                    to{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://www2.lbl.gov/ehs/pub3000/CH08/LBNL%20Electrical%20Safety%20Manual.pdf"
                      target="_blank"
                    >
                      10 joules
                    </a>
                    . &nbsp;For reference,{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://www.ilcor.org/data/ILCOR-AED-children.pdf"
                      target="_blank"
                    >
                      AEDs discharge ~150-360 joules
                    </a>
                    .{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://books.google.com/books?id=evv5bJMDaE0C&amp;pg=PA18&amp;lpg=PA18&amp;dq=taser+joules&amp;source=bl&amp;ots=BKJCFSINXt&amp;sig=ACfU3U2mrvBSxaqsvjrurwyNGlVpnufGIg&amp;hl=en&amp;sa=X&amp;ved=2ahUKEwjE7Za58MHqAhVFXM0KHerlB0wQ6AEwD3oECAkQAQ#v=onepage&amp;q=taser%20joules&amp;f=false"
                      target="_blank"
                    >
                      TAZERs discharge 0.36 - 1.76 joules depending on the model
                    </a>{" "}
                    (though with other characteristics designed to incapacitate,
                    such as proprietary waveform, multiples discharges, etc.).
                    Using the capacitor model described in the previous section,
                    the energy discharged by an empty electrostatic toilet in a
                    worst-case scenario (complete breakdown of electric
                    insulation, fully charged capacitor, with a human in the
                    current loop), is estimated using the following equations:
                  </p>
                  <blockquote>
                    <p>
                      Capacitance (C) = ε<sub>0</sub>A/d = (8.85 *10
                      <sup>-12</sup>)(0.785)/(0.28) =
                      <strong>
                        {" "}
                        24.8*10<sup>-12 &nbsp;</sup>farads
                      </strong>
                    </p>
                    <p>
                      Energy (E) = 1/2 * C &nbsp;V<sup>2</sup> = (0.5)( 24.81*10
                      <sup>-12</sup>)(160000<sup>2</sup>) <i>=</i>{" "}
                      <strong>0.32 joules</strong>
                    </p>
                    <p>
                      <i>
                        Note: Variable definitions are described in the previous
                        section
                      </i>
                    </p>
                  </blockquote>
                  <p>
                    The resulting capacitance for this device is ~25 picofarads,
                    which puts the{" "}
                    <strong>maximum energy discharge at ~0.32 joules. </strong>
                    This amount of energy is very unlikely to pose and
                    electrical health hazard.
                  </p>
                  <h3>
                    Routine usage capacitor discharge and continuous current
                    hazard
                  </h3>
                  <p>
                    Even shocks that aren't dangerous can be uncomfortable. If
                    sufficient air remains between the "human terminal" and the
                    "can terminal" to prevent the electrical breakdown of air,
                    there is minimal shock risk from using the toilet. If a
                    person completes the circuit by bridging the terminals with
                    their waste, that person is at increased risk for receiving
                    a shock.&nbsp;
                  </p>
                  <blockquote>
                    <p>
                      Aside: In particular, urine is the most likely to form a
                      bridge. However, note that a continuous stream of charged
                      urine is unlikely, as repulsive electrostatic forces will
                      quickly split a charged stream into smaller droplets,
                      though this effect is not an important part of toilet
                      operation.
                    </p>
                  </blockquote>
                  <p>
                    To mitigate this risk, the bottom of the can is insulated
                    from the negative terminal of the Van der Graaf generator by
                    a 1MOhm resistor. Such a resistor is{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="http://www.circuitnet.com/experts/87211.html"
                      target="_blank"
                    >
                      common in electrical grounding devices
                    </a>{" "}
                    to distribute the electrical discharge over time.
                    &nbsp;After the initial electrical discharge into the
                    resistor, if the circuit remains closed, the user will still
                    be subject to continuous current from the generator.
                    Commercial Van der Graaf generators produce on the order of{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://winsco.com/product/van-de-graaff-generator/"
                      target="_blank"
                    >
                      10 micro amps of current
                    </a>
                    . This is well below the threshold of perception for humans
                    (~ 1mA), so crew members should not experience any tingling
                    or electrical sensations.
                  </p>
                  <h3>Electronic device hazard</h3>
                  <p>
                    The static charge buildup is a concern for crew comfort as
                    well as for other electronic devices crew members may
                    encounter after using the toilet. After use, crew members
                    should take care to ground themselves and the toilet to
                    either the space craft's hull (
                    <a
                      rel="nofollow noreferrer"
                      href="https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20110014828.pdf"
                      target="_blank"
                    >
                      as in the ISS
                    </a>
                    ) or to a planetary/lunar body. Grounding prevents crew
                    members from carrying a charge with them after they use the
                    toilet. This could happen automatically if the toilet is
                    attached to a ground.
                  </p>
                  <p>
                    Furthermore, opening the toilet hatch, which should happen
                    after each use when replacing the waste bag, mechanically
                    connects the two charged terminals inside the toilet to
                    eliminate voltage gradients between uses. This post-use
                    discharge prevents shocks while replacing bags and while
                    performing any toilet maintenance.
                  </p>
                  <h2>Belt contamination hazard</h2>
                  <p>
                    The seat belt makes toilet use more convenient for crew
                    members by allowing hands free operation. However, for
                    faster turnaround times, &nbsp;the same belt is shared
                    between crew members. &nbsp;To promote cleanliness and limit
                    bacterial or viral transfer between crew members, belts
                    stowed in the base of the toilet are bombarded with UV light
                    between uses. To prevent crew exposure, this bombardment
                    only occurs for a short period of time after the lower
                    storage doors are closed.
                  </p>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h5 className="text-bold">
              Please discuss the technical maturity of your proposed toilet
              design. What TRL would you assign it? Please provide a supporting
              rationale and/or evidence for this rating. Why do you believe this
              could be developed and integrated into a lunar rover in the next
              2-3 years?
            </h5>
            <div className="entry">
              <div>
                <div className="editor-content">
                  <p>
                    <strong>
                      The highest TRL that I can justify for this toilet is in
                      the range of 3-4.&nbsp;
                    </strong>
                  </p>
                  <p>Let's start climbing the ladder:</p>
                  <p>
                    <strong>
                      <u>TRL 1</u>
                    </strong>
                  </p>
                  <p>
                    This design is based on existing technologies and well
                    understood principles: electrostatic attraction/repulsion
                    and centripetal force. Electrostatic force is governed by
                    Coulomb's Law and centripetal force is a consequence of
                    Newtonian physics. These phenomenon have been used in
                    engineering applications for at least the last two
                    centuries.
                  </p>
                  <p>
                    <strong>
                      <u>TRL 2</u>
                    </strong>
                  </p>
                  <p>
                    This level is satisfied by this design. This document
                    describes a practical use for electrostatic and centripetal
                    forces as a means to attract and contain human waste in a
                    low-g or zero-g environment. It includes high level analysis
                    that suggests its feasibility and enumerates the benefits of
                    such a design.
                  </p>
                  <p>
                    <strong>
                      <u>TRL 3</u>
                    </strong>
                  </p>
                  <p>
                    There is experimental affirmation of this design's primary
                    technological component: the effect of static electrical
                    charges on water droplets in a micro-gravity environment. On
                    expedition 30 to the ISS, Astronaut Don Pettit demonstrated
                    the behavior of these forces using knitting needles, water
                    particles, and the Triboelectric effect:
                  </p>
                  <video-wrapper>
                    <iframe
                      src="//www.youtube.com/embed/qHrBhgwq__Q?rel=0&amp;iv_load_policy=3&amp;wmode=opaque&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.herox.com"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </video-wrapper>
                  <p>
                    This video and its{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="http://www.electrostatics.org/images/ESA_2015_I1_Stevenson.pdf"
                      target="_blank"
                    >
                      corresponding research paper
                    </a>{" "}
                    show the feasibility of charging water particles via a Van
                    der Graaf generator and show that such a charge produces a
                    meaningful amount of force on the droplets.
                  </p>
                  <p>
                    There are also demonstrations of centripetal force being
                    used to develop air pockets in the center of liquid/solid
                    materials, the same effect used by the spinning can to
                    contain the waste materials. Astronaut Jeff Williams (skip
                    to 2:37 to see the demonstration):
                  </p>
                  <video-wrapper>
                    <iframe
                      src="//www.youtube.com/embed/6tXoe7_BB8g?rel=0&amp;iv_load_policy=3&amp;wmode=opaque"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </video-wrapper>
                  <p>
                    Separation toilets have been tried and tested in
                    gravitational environments. The major difficulties that
                    researchers encountered are sociological:{" "}
                    <a
                      rel="nofollow noreferrer"
                      href="https://www.core77.com/posts/27543/a-great-product-idea-undone-by-human-factors-the-nomix-toilet-27543"
                      target="_blank"
                    >
                      <u>
                        men not willing to sit, children misunderstanding toilet
                        use, unwillingness to sit on public toilet seats
                      </u>
                    </a>
                    . This should not be a problem for trained crew members.
                  </p>
                  <figure className="image">
                    <img src="https://d253pvgap36xx8.cloudfront.net/editor_uploads/199835/2020/08/16/image.png"></img>
                    <figcaption>Example separation toilet</figcaption>
                  </figure>
                  <p>
                    To me, these demonstrations constitute "experimental results
                    validating predictions" that satisfy the exit criteria for
                    TLR3. These experiments were performed in a relevant zero-g
                    environment, which further strengthens this design. However,
                    the climb stops here. For hardware, TRL4 requires that a
                    "low fidelity system/component breadboard is built and
                    operated". No integrated <i>system </i>prototypes of this
                    specific toilet design exist, to my knowledge. So, based on
                    the rubric,{" "}
                    <strong>
                      the highest technology level that I can justify for this
                      toilet is in the range of 3-4.&nbsp;
                    </strong>
                  </p>
                  <h3>Other considerations</h3>
                  <p>
                    There are relatively few components compared with, say,
                    <a
                      rel="nofollow noreferrer"
                      href="https://space.stackexchange.com/questions/44957/was-there-a-backup-plan-in-case-the-shuttle-toilet-malfunctioned?utm_source=Iterable&amp;utm_medium=email&amp;utm_campaign=the_overflow_newsletter"
                      target="_blank"
                    >
                      {" "}
                      this diagram
                    </a>{" "}
                    of toilet used on the Shuttle. Fewer components require less
                    lead time, design work, and testing to implement, which
                    substantially increases the chance that such a design can be
                    developed and integrated in the next 2-3 years.
                  </p>
                  <h3>Areas of future focus</h3>
                  <p>
                    Though there is a rich scientific and
                    mathematical&nbsp;history of attempting to understand
                    charges and the forces they produce, it can be difficult to
                    analytically calculate these forces when the geometry is
                    complex. The Don Pettit&nbsp;video's
                    <a
                      rel="nofollow noreferrer"
                      href="http://www.electrostatics.org/images/ESA_2015_I1_Stevenson.pdf"
                      target="_blank"
                    >
                      {" "}
                      research paper
                    </a>{" "}
                    suggest that finite element analysis can accurately predict
                    these forces, but that has not been performed in this
                    design.
                  </p>
                  <p>
                    Developing a safe device seems viable, as described by the
                    high-level analysis in this document. However, this
                    dimension needs more detailed attention. For example, can
                    some unexpected component of the toilet produce a charge
                    capacitance that might prove harmful to the crew?
                  </p>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
