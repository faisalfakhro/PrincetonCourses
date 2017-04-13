// loads page for mobile given netid
function page_mobile(netid) {
  // string for desktop
  var htmlString = (`
    <div id="full-page" class="flex-item-rigid flex-container-col">
      <nav id="menu-bar" class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header flex-container-row">
          <a rel="nofollow" class="navbar-brand flex-item-rigid">PC <sup>beta</sup></a>
          <form class="navbar-btn flex-item-stretch" role="search">
            <input id="searchbox" class="flex-item-stretch form-control" type="text" placeholder="Search (e.g. COS 126, QR, Katz, ...)" autofocus="" autocomplete="off">
          </form>
          <button type="button" class="navbar-toggle flex-item-rigid" data-toggle="collapse" data-target="#navigationbar">
            <!-- <span class="sr-only">Toggle navigation</span> -->
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navigationbar">
          <ul class="nav navbar-nav navbar-right">
            <li id="feedback-toggle"><a rel="nofollow" href="#">Feedback</a></li>
            <li id="about-toggle"><a rel="nofollow" href="#">About</a></li>
            <li id="netid"><a rel="nofollow" href="#">` + netid + `</a></li>
            <li id="logout" class="active" style="display:none;"><a rel="nofollow" href="/auth/logout">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div id="main-pane" class="mobile flex-item-stretch slider">
        <div id="suggest-wrapper">
          <div id="suggest-pane" class="mobile">
            <div id="suggest-allcourses">
              <div id="suggest-allcourses-header" class="flex-container-row">
                <h5 class="flex-item-stretch truncate"><strong>All Courses</strong></h5>
                <h5 class="flex-item-rigid"><i id="suggest-allcourses-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="suggest-allcourses-body" class="list-group marginless">
                <!-- all courses go here -->
              </ul>
            </div>
            <div id="suggest-distributions">
              <div id="suggest-distributions-header" class="flex-container-row">
                <h5 class="flex-item-stretch truncate"><strong>Distributions</strong></h5>
                <h5 class="flex-item-rigid"><i id="suggest-distributions-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="suggest-distributions-body" class="list-group marginless">
                <!-- distributions go here -->
              </ul>
            </div>
            <div id="suggest-pdfoptions">
              <div id="suggest-pdfoptions-header" class="flex-container-row">
                <h5 class="flex-item-stretch truncate"><strong>PDF options</strong></h5>
                <h5 class="flex-item-rigid"><i id="suggest-pdfoptions-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="suggest-pdfoptions-body" class="list-group marginless">
                <!-- pdf options go here -->
              </ul>
            </div>
            <div id="suggest-departments">
              <div id="suggest-departments-header" class="flex-container-row">
                <h5 class="flex-item-stretch truncate"><strong>Departments</strong></h5>
                <h5 class="flex-item-rigid"><i id="suggest-departments-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="suggest-departments-body" class="list-group marginless">
                <!-- departments go here -->
              </ul>
            </div>
            <div class="pane-padding"></div>
          </div>
        </div>
        <div id="search-wrapper">
          <div id="search-pane" class="mobile flex-container-col">
            <form class="flex-item-rigid" id="search-form" onkeypress="return event.keyCode !== 13">
              <div class="form-group flex-container-row marginless">
                <select id="semester" class="form-control flex-item-stretch margin-r">
                  <option disabled>Show courses from semester…</option>
                </select>
                <select id="sort" class="flex-item-stretch margin-l form-control">
                  <option disabled>Sort by…</option>
                  <option value="relevance" selected>Relevance</option>
                  <option value="rating">Rating</option>
                  <option value="title">Title</option>
                  <option value="commonName">Department &amp; Course Number</option>
                </select>
              </div>
            </form>
            <div id="favorite-header" class="flex-item-rigid flex-container-row">
              <h4 id="favorite-title" class="flex-item-stretch truncate">0 Favorite Courses</h4>
              <h4 class="flex-item-rigid"><i id="fav-display-toggle" class="fa fa-minus text-button"></i></h4>
            </div>
            <div id="favorite-courses" class="flex-item-shrink">
              <ul id="favs" class="list-group marginless">
                <!-- favorite list loads here -->
              </ul>
            </div>
            <div id="search-header" class="flex-item-rigid flex-container-row">
              <h4 id="search-title" class="flex-item-stretch truncate">0 Search Results</h4>
              <h4 class="flex-item-rigid"><i id="search-display-toggle" class="fa fa-minus text-button"></i></h4>
            </div>
            <div id="search-results" class="flex-item-scroll">
              <ul id="results" class="list-group marginless">
                <!-- results load here -->
              </ul>
            </div>
          </div>
        </div>
        <div id="display-wrapper">
          <div id="display-pane" class="mobile flex-container-col">
            <div id="display-header" class="flex-item-rigid">
              <div class="flex-container-row">
                <h4 id="disp-title" class="flex-item-stretch">Search to begin! <i class="fa fa-long-arrow-up"></i></h4>
                <h4 id="disp-title-right" class="flex-item-rigid">
                  <!-- fav icon and eval badge go here -->
                </h4>
              </div>
              <div class="flex-container-row">
                <h5 id="disp-subtitle" class="flex-item-stretch"><i class="fa fa-long-arrow-left"></i> Tip: swipe left and right <i class="fa fa-long-arrow-right"></i></h5>
                <h5 id="disp-subtitle-right" class="flex-item-rigid">
                  <!-- link to registrar's page goes here -->
                </h5>
              </div>
            </div>
            <div id="display-body-wrapper" class="flex-item-stretch">
              <div id="display-body" class="mobile second-slider">
                <div id="evals-wrapper">
                  <div id="evals-pane" class="mobile">
                    <div id="evals-semesters">
                      <div id="evals-semesters-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Past Semesters</strong></h5>
                        <h5 class="flex-item-rigid"><i id="evals-semesters-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <!-- semesters go in here -->
                      <ul id="evals-semesters-body" class="list-group marginless"></ul>
                    </div>
                    <div id="evals-numeric">
                      <div id="evals-numeric-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Numeric Evaluations</strong><span class="evals-past" style="display: none;"> (from <span class="evals-past-semester">a different semester</span>)</span></h5>
                        <h5 class="flex-item-rigid"><i id="evals-numeric-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <!-- numeric evals go here -->
                      <ul id="evals-numeric-body" class="list-group marginless"></ul>
                    </div>
                    <div id="evals-comments">
                      <div id="evals-comments-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Student Comments</strong><span class="evals-past" style="display: none;"> (from <span class="evals-past-semester">a different semester</span>)</span></h5>
                        <h5 class="flex-item-rigid"><i id="evals-comments-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <!-- student comments go here -->
                      <ul id="evals-comments-body" class="list-group marginless"></ul>
                    </div>
                    <div class="pane-padding"></div>
                  </div>
                </div>
                <div id="info-wrapper">
                  <div id="info-pane" class="mobile">
                    <div id="disp-instructors" style="display: none;">
                      <div id="disp-instructors-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Instructors</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-instructors-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-instructors-body" class="list-group marginless">
                        <!-- instructors go here -->
                      </ul>
                    </div>
                    <div id="disp-description" style="display: none;">
                      <div id="disp-description-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Description</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-description-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-description-body" class="list-group marginless">
                        <!-- description goes here -->
                      </ul>
                    </div>
                    <div id="disp-assignments" style="display: none;">
                      <div id="disp-assignments-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Assignments</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-assignments-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-assignments-body" class="list-group marginless">
                        <!-- assignments go here -->
                      </ul>
                    </div>
                    <div id="disp-grading" style="display: none;">
                      <div id="disp-grading-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Grading</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-grading-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-grading-body" class="list-group marginless">
                        <!-- grading goes here -->
                      </ul>
                    </div>
                    <div id="disp-prerequisites" style="display: none;">
                      <div id="disp-prerequisites-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Prerequisites</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-prerequisites-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-prerequisites-body" class="list-group marginless">
                        <!-- prerequisites go here -->
                      </ul>
                    </div>
                    <div id="disp-equivalent" style="display: none;">
                      <div id="disp-equivalent-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Equivalent Courses</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-equivalent-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-equivalent-body" class="list-group marginless">
                        <!-- equivalent courses go here -->
                      </ul>
                    </div>
                    <div id="disp-other" style="display: none;">
                      <div id="disp-other-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Other Information</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-other-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-other-body" class="list-group marginless">
                        <!-- other information goes here -->
                      </ul>
                    </div>
                    <div id="disp-readings" style="display: none;">
                      <div id="disp-readings-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Readings</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-readings-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-readings-body" class="list-group marginless">
                        <!-- readings go here -->
                      </ul>
                    </div>
                    <div id="disp-classes" style="display: none;">
                      <div id="disp-classes-header" class="flex-container-row disp-section-header">
                        <h5 class="flex-item-stretch truncate"><strong>Classes</strong></h5>
                        <h5 class="flex-item-rigid"><i id="disp-classes-toggle" class="fa fa-minus text-button"></i></h5>
                      </div>
                      <ul id="disp-classes-body" class="list-group marginless">
                        <!-- classes go here -->
                      </ul>
                    </div>
                    <div class="pane-padding"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popups -->

    <div id="feedback-container" class="panel" style="display: none;">
      <form id="feedback-form" class="panel-body text-center" method="POST" target="no-target" onkeypress="return event.keyCode !== 13">
        <div class="form-group">
          <label for="feedback-text">Any thoughts, comments or complaints?</label>
          <textarea id="feedback-text" class="form-control" rows="3"></textarea>
        </div>
        <button id="feedback-submit" class="btn btn-default" type="submit">Submit</button>
      </form>
      <iframe src="about:blank" id="no-target" name="no-target" style="display: none;"></iframe>
    </div>

    <div id="about-popup" style="display: none;">
      <div id="about-panel" class="panel panel-default">
        <div class="panel-heading flex-container-row">
          <h3 class="panel-title flex-item-stretch">About</h3>
          <h3 class="panel-title flex-item-rigid"><i id="about-popup-close" class="fa fa-close"></i></h3>
        </div>
        <div class="panel-body">
          <p>A project by Kara&nbsp;Bressler (team leader), Caterina&nbsp;Golner, Sebastian&nbsp;Hallum&nbsp;Clarke, Mel&nbsp;Shu, and Bensu&nbsp;Sicim for COS&nbsp;333. The team is advised by <a href="https://www.cs.princeton.edu/~cmoretti/" target="_blank">Christopher Moretti</a>.</p>
        <p>View our <a href="https://docs.google.com/document/d/1l00Uwu0PcuXWq3vksckGBhOh5mqGTwR8qz6zD3FViLw/edit?usp=sharing" target="_blank">design document</a>.</p>
        </div>
      </div>
    </div>

    <div class="panel alert alert-info alert-dismissable" id="updates-bottom-popup" style="display:none">
      <button type="button" class="close" data-dismiss="alert" aria-label="close" onclick="saveUpdatePopupState()">&times;</button>
      <strong>Update:</strong>
    </div>
  `)

  $('body').prepend(htmlString)
}


// loads page for desktop given netid
function page_desktop(netid) {

  // string for desktop
  var htmlString = (`
  <div id="full-page" class="flex-item-rigid flex-container-col">
    <nav id="menu-bar" class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <a class="navbar-brand">Princeton Courses <sup>beta</sup></a>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
          <!-- <span class="sr-only">Toggle navigation</span> -->
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navigationbar">
        <ul class="nav navbar-nav">
          <li id="suggest-toggle"><a href="#">Search Suggestions</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li id="feedback-toggle"><a href="#">Feedback</a></li>
          <li id="about-toggle"><a href="#">About</a></li>
          <li id="netid"><a href="#">` + netid + `</a></li>
          <li id="logout" class="active" style="display:none;"><a href="/auth/logout">Logout</a></li>
        </ul>
      </div>
    </nav>
    <div id="main-pane" class="flex-item-stretch flex-container-row">
      <div id="suggest-pane" class="flex-item-rigid" style="display: none;">
        <div id="suggest-allcourses">
          <div id="suggest-allcourses-header" class="flex-container-row">
            <h5 class="flex-item-stretch truncate"><strong>All Courses</strong></h5>
            <h5 class="flex-item-rigid"><i id="suggest-allcourses-toggle" class="fa fa-minus text-button"></i></h5>
          </div>
          <ul id="suggest-allcourses-body" class="list-group marginless">
            <!-- all courses go here -->
          </ul>
        </div>
        <div id="suggest-distributions">
          <div id="suggest-distributions-header" class="flex-container-row">
            <h5 class="flex-item-stretch truncate"><strong>Distributions</strong></h5>
            <h5 class="flex-item-rigid"><i id="suggest-distributions-toggle" class="fa fa-minus text-button"></i></h5>
          </div>
          <ul id="suggest-distributions-body" class="list-group marginless">
            <!-- distributions go here -->
          </ul>
        </div>
        <div id="suggest-pdfoptions">
          <div id="suggest-pdfoptions-header" class="flex-container-row">
            <h5 class="flex-item-stretch truncate"><strong>PDF options</strong></h5>
            <h5 class="flex-item-rigid"><i id="suggest-pdfoptions-toggle" class="fa fa-minus text-button"></i></h5>
          </div>
          <ul id="suggest-pdfoptions-body" class="list-group marginless">
            <!-- pdf options go here -->
          </ul>
        </div>
        <div id="suggest-departments">
          <div id="suggest-departments-header" class="flex-container-row">
            <h5 class="flex-item-stretch truncate"><strong>Departments</strong></h5>
            <h5 class="flex-item-rigid"><i id="suggest-departments-toggle" class="fa fa-minus text-button"></i></h5>
          </div>
          <ul id="suggest-departments-body" class="list-group marginless">
            <!-- departments go here -->
          </ul>
        </div>
        <div class="pane-padding"></div>
      </div>
      <div id="search-pane" class="flex-item-rigid flex-container-col" style="display:none">
        <form class="flex-item-rigid" id="search-form" onkeypress="return event.keyCode !== 13">
          <div class="form-group flex-container-row">
            <input id="searchbox" class="flex-item-stretch form-control" type="text" placeholder="Search (e.g. COS 126, QR, Katz, ...)" autofocus="" autocomplete="off">
          </div>
          <div class="form-group flex-container-row marginless">
            <select id="semester" class="form-control flex-item-stretch margin-r">
              <option disabled>Show courses from semester…</option>
            </select>
            <select id="sort" class="flex-item-stretch margin-l form-control">
              <option disabled>Sort by…</option>
              <option value="relevance" selected>Relevance</option>
              <option value="rating">Rating</option>
              <option value="title">Title</option>
              <option value="commonName">Department &amp; Course Number</option>
            </select>
          </div>
        </form>
        <div id="favorite-header" class="flex-item-rigid flex-container-row">
          <h4 id="favorite-title" class="flex-item-stretch truncate">0 Favorite Courses</h4>
          <h4 class="flex-item-rigid"><i id="fav-display-toggle" class="fa fa-minus text-button"></i></h4>
        </div>
        <div id="favorite-courses" class="flex-item-shrink">
          <ul id="favs" class="list-group marginless">
            <!-- favorite list loads here -->
          </ul>
        </div>
        <div id="search-header" class="flex-item-rigid flex-container-row">
          <h4 id="search-title" class="flex-item-stretch truncate">0 Search Results</h4>
          <h4 class="flex-item-rigid"><i id="search-display-toggle" class="fa fa-minus text-button"></i></h4>
        </div>
        <div id="search-results" class="flex-item-scroll">
          <ul id="results" class="list-group marginless">
            <!-- results load here -->
          </ul>
        </div>
      </div>
      <div id="search-resizer" class="flex-item-rigid resizer"></div>
      <div id="display-pane" class="flex-item-stretch flex-container-col" style="display:none;">
        <div id="display-header" class="flex-item-rigid">
          <div class="flex-container-row">
            <h3 id="disp-title" class="flex-item-stretch"><i class="fa fa-long-arrow-left"></i> Search for a course to begin!</h3>
            <h3 id="disp-title-right" class="flex-item-rigid">
              <!-- fav icon and eval badge go here -->
            </h3>
          </div>
          <div class="flex-container-row">
            <h4 id="disp-subtitle" class="flex-item-stretch">Tip: You can click the hearts to save your favorite courses.</h4>
            <h4 id="disp-subtitle-right" class="flex-item-rigid">
              <!-- link to registrar's page goes here -->
            </h4>
          </div>
        </div>
        <div id="display-body" class="flex-item-stretch flex-container-row" style="display: none;">
          <div id="evals-pane" class="flex-item-stretch">
            <div id="evals-semesters">
              <div id="evals-semesters-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Past Semesters</strong></h5>
                <h5 class="flex-item-rigid"><i id="evals-semesters-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <!-- semesters go in here -->
              <ul id="evals-semesters-body" class="list-group marginless"></ul>
            </div>
            <div id="evals-numeric">
              <div id="evals-numeric-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Numeric Evaluations</strong><span class="evals-past" style="display: none;"> (from <span class="evals-past-semester">a different semester</span>)</span></h5>
                <h5 class="flex-item-rigid"><i id="evals-numeric-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <!-- numeric evals go here -->
              <ul id="evals-numeric-body" class="list-group marginless"></ul>
            </div>
            <div id="evals-comments">
              <div id="evals-comments-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Student Comments</strong><span class="evals-past" style="display: none;"> (from <span class="evals-past-semester">a different semester</span>)</span></h5>
                <h5 class="flex-item-rigid"><i id="evals-comments-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <!-- student comments go here -->
              <ul id="evals-comments-body" class="list-group marginless"></ul>
            </div>
            <div class="pane-padding"></div>
          </div>
          <div id="info-resizer" class="flex-item-rigid resizer"></div>
          <div id="info-pane" class="flex-item-rigid">
            <div id="disp-instructors" style="display: none;">
              <div id="disp-instructors-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Instructors</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-instructors-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-instructors-body" class="list-group marginless">
                <!-- instructors go here -->
              </ul>
            </div>
            <div id="disp-description" style="display: none;">
              <div id="disp-description-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Description</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-description-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-description-body" class="list-group marginless">
                <!-- description goes here -->
              </ul>
            </div>
            <div id="disp-assignments" style="display: none;">
              <div id="disp-assignments-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Assignments</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-assignments-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-assignments-body" class="list-group marginless">
                <!-- assignments go here -->
              </ul>
            </div>
            <div id="disp-grading" style="display: none;">
              <div id="disp-grading-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Grading</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-grading-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-grading-body" class="list-group marginless">
                <!-- grading goes here -->
              </ul>
            </div>
            <div id="disp-prerequisites" style="display: none;">
              <div id="disp-prerequisites-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Prerequisites</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-prerequisites-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-prerequisites-body" class="list-group marginless">
                <!-- prerequisites go here -->
              </ul>
            </div>
            <div id="disp-equivalent" style="display: none;">
              <div id="disp-equivalent-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Equivalent Courses</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-equivalent-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-equivalent-body" class="list-group marginless">
                <!-- equivalent courses go here -->
              </ul>
            </div>
            <div id="disp-other" style="display: none;">
              <div id="disp-other-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Other Information</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-other-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-other-body" class="list-group marginless">
                <!-- other information goes here -->
              </ul>
            </div>
            <div id="disp-readings" style="display: none;">
              <div id="disp-readings-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Readings</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-readings-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-readings-body" class="list-group marginless">
                <!-- readings go here -->
              </ul>
            </div>
            <div id="disp-classes" style="display: none;">
              <div id="disp-classes-header" class="flex-container-row disp-section-header">
                <h5 class="flex-item-stretch truncate"><strong>Classes</strong></h5>
                <h5 class="flex-item-rigid"><i id="disp-classes-toggle" class="fa fa-minus text-button"></i></h5>
              </div>
              <ul id="disp-classes-body" class="list-group marginless">
                <!-- classes go here -->
              </ul>
            </div>
            <div class="pane-padding"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Popups -->

  <div id="feedback-container" class="panel" style="display: none;">
    <form id="feedback-form" class="panel-body text-center" method="POST" target="no-target" onkeypress="return event.keyCode !== 13">
      <div class="form-group">
        <label for="feedback-text">Any thoughts, comments or complaints?</label>
        <textarea id="feedback-text" class="form-control" rows="3"></textarea>
      </div>
      <button id="feedback-submit" class="btn btn-default" type="submit">Submit</button>
    </form>
    <iframe src="about:blank" id="no-target" name="no-target" style="display: none;"></iframe>
  </div>

  <div id="about-popup" style="display: none;">
    <div id="about-panel" class="panel panel-default">
      <div class="panel-heading flex-container-row">
        <h3 class="panel-title flex-item-stretch">About</h3>
        <h3 class="panel-title flex-item-rigid"><i id="about-popup-close" class="fa fa-close"></i></h3>
      </div>
      <div class="panel-body">
        <p>A project by Kara&nbsp;Bressler (team leader), Caterina&nbsp;Golner, Sebastian&nbsp;Hallum&nbsp;Clarke, Mel&nbsp;Shu, and Bensu&nbsp;Sicim for COS&nbsp;333. The team is advised by <a href="https://www.cs.princeton.edu/~cmoretti/" target="_blank">Christopher Moretti</a>.</p>
      <p>View our <a href="https://docs.google.com/document/d/1l00Uwu0PcuXWq3vksckGBhOh5mqGTwR8qz6zD3FViLw/edit?usp=sharing" target="_blank">design document</a>.</p>
      </div>
    </div>
  </div>

  <div class="panel alert alert-info alert-dismissable" id="updates-bottom-popup" style="display:none">
    <button type="button" class="close" data-dismiss="alert" aria-label="close" onclick="saveUpdatePopupState()">&times;</button>
    <strong>Update:</strong>
  </div>
  `)

  $('body').prepend(htmlString)
}
