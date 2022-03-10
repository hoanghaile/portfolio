import React from "react";

const SectionResume = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="has-ellipsis-left text-center wow fadeInUp">
            Portfolio
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="item">
                <h3>2019 - 2021</h3>
                <p className="has-ellipsis-left">During college, took part in many small and
                  medium projects:</p>
                <p>Graduation project: </p>
                <p>Small-project:&nbsp;<a className="text-primary" href="https://bitbucket.org/hailhps11105/project/src/master/">https://bitbucket.org/hailhps11105/project/src/master/</a>
                  <a className="text-primary" href="http://hailehoang.com/" alt="Small-Project" title="">(Small-Project)</a></p>
                <p>Portfolio:&nbsp;<a className="text-primary" href="https://bitbucket.org/hailhps11105/cv-online/src/master/"> https://bitbucket.org/hailhps11105/cv-online/src/master/</a></p>
                <p>Web Movie:&nbsp;<a className="text-primary" href="https://github.com/hoanghaile/laravel_asm_movie">https://github.com/hoanghaile/laravel_asm_movie</a> </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h3>5/2021-9/2021</h3>
              <p className="has-ellipsis-left">React intership in company <a className="text-primary" href="https://vnagroup.com.vn/">VNA-Group</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionResume;
