---
Title: Home
Description: Amateur Mad Scientist, Ryder McMinn
Author: Menu
---

<div class="jumbotron darken">
    <h1 class="text-center">Ryder McMinn</h1>
    <h1 class="text-center"><small>Amateur Mad Scientist <i class="fa fa-flask"></small></i></h1>
    <ul class="list-inline text-center">
      <li><a href="https://github.com/rmcminn"><i class="fa fa-github fa-4x"></i></a></li>
      <li><a href="http://careers.stackoverflow.com/rydermcminn"><i class="fa fa-stack-overflow fa-4x"></i></a></li>
      <li><a href="https://www.linkedin.com/in/rydermcminn"><i class="fa fa-linkedin fa-4x"></i></a></li>
    </ul>
</div>

<div class="container">

    <div class="row text-center">
        <h2>Projects</h2>
        <hr/>
        <div class="row">

          <!-- Portfolio -->
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="./themes/bootstrap_pico/images/projects/portfolio.png" alt="">
              <div class="caption">
                <a href="./?projects/portfolio" class="btn btn-default">Portfolio</a>
              </div>
            </div>
          </div>

          <!-- Grade Calculator IU -->
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="./themes/bootstrap_pico/images/projects/gradecalculatoriu.jpg" alt="">
              <div class="caption">
                <a href="./?projects/gradecalculatoriu" class="btn btn-default">Grade Calculator IU</a>
              </div>
            </div>
          </div>

          <!-- Hive -->
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="./themes/bootstrap_pico/images/projects/hive.png" alt="">
              <div class="caption">
                <a href="./?projects/hive" class="btn btn-default">Hive</a>
              </div>
            </div>
          </div>

          <!-- DraftOnce -->
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="./themes/bootstrap_pico/images/projects/do_logo.png" alt="">
              <div class="caption">
                <a href="./?projects/draftonce" class="btn btn-default">DraftOnce</a>
              </div>
            </div>
          </div>

          <!-- IDEM Field Notes -->
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="./themes/bootstrap_pico/images/projects/fieldnoteshtml5.png" alt="">
              <div class="caption">
                <a href="./?projects/idemfieldnotes" class="btn btn-default">IDEM Field Notes</a>
              </div>
            </div>
          </div>

        </div>
    </div>

    <div class="row text-center">
      <form method="post" action="./php/sendmail.php" class="ng-pristine ng-valid">
          <h2 class="text-left"><small><i>Contact Me</i></small></h2>
          <div class="form-group">
              <div class="input-group input-group-lg">
                  <span class="input-group-addon">@</span>
                  <input type="email" name="email" class="form-control" placeholder="Your Email">
              </div>
              <br>
               <input type="text" class="form-control" placeholder="Subject" name="subject">
              <br>
               <textarea class="form-control" placeholder="Message" name="message"></textarea>
              <br>
              <div class="btn-group">
               <button type="submit" class="btn btn-default">Submit</button>
               <button type="Reset" class="btn btn-default">Reset</button>
              </div>
          </div>
      </form>
    </div>
</div>
