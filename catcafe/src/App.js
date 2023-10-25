import './App.css';

function App() {
  return (
    <div className="App">
      <div class="nav-bar">
        <header id="header" class="header">
          <ul>
            <a class="nav-link" href="#about-welcome"><strong>About</strong></a>
            <a class="nav-link" href="#menu"><strong>Menu</strong></a>
            <a class="nav-link" href="#products"><strong>Products</strong></a>
            <a class="nav-link" href="#meet_our_adoptable_cats"
              ><strong>Meet Our Cats</strong></a>
            <a class="nav-link" href="#local_rescues"
              ><strong>Local Rescues</strong></a>
          </ul>
        </header>
      </div>
      <div class="container">
      <div>
        <img
          src="./assets/CatCafe2.jpg"
          alt="cat on counter with coffee"
          height="425px"
          width="1000px"
        />
        <div class="title">
          <h1 id="cafe-name">Frosted Whiskers</h1>
          <h2>Cat Café and Pâtisserie</h2>
        </div>
      </div>
      <div class="about">
        <h3 id="about-welcome"><strong>Welcome fellow cat lovers!</strong></h3>
        <p>
          Located in the Shenandoah Valley, we are the first cat café in the
          Winchester, VA area!
        </p>
        <p>
          We work with local feline rescues, such as SPCA NOVA, Dakota’s Dream
          Animal Rescue and Frederick County Esther Boyd Animal Shelter, to
          house adoptable cats in need of homes.
        </p>
        <p>
          You'll find a delicious menu of coffee and homemade pastries, along
          with a selection of products to enrich your feline friend's life. Each
          purchase provides financial support for our cats. Extra proceeds are
          donated to <a href="#local_rescues">local rescues</a>.
        </p>
      </div>
      <br />
      <hr />
      <div class="menu">
        <h3 id="menu">Menu</h3>
        <hr />
        <p>Are you craving a delicious coffee?</p>
        <p>Want a homemade pastry without the mess?</p>
        <p>Then come on down to Old Town Winchester!</p>
        <p>The delicious joy of caffeine, sweets, and playing with cats.</p>
        <p>There's nothing sweeter! <img src="./assets/Cat_in_cup.jpg" alt="cat in a cup" height= "50px" width="50px" /></p>
        <br />
        <div id="menu-whole">
          <div class="coffee">
            <img
              src="./assets/Coffee-background.jpg"
              alt="coffe bean background"
              height="600px"
              width="550px"
            />
            <div class="items">
              <ul><strong>Abyssianian</strong> -- Coffee and 3 shots espresso</ul>
              <ul><strong>Persian</strong> -- Espresso and steamed milk</ul>
              <ul><strong>Scottish Fold</strong> -- Espresso, milk chocolate, and steamed milk</ul>
              <ul><strong>American Curl</strong> -- Espresso and hot water</ul>
              <ul><strong>Burmese</strong> -- Espresso, steamed milk and foam</ul>
              <ul><strong>Maine Coon</strong> -- Coffee and steamed milk</ul>
              <ul><strong>Devon Rex</strong> -- 1oz espresso</ul>
              <ul><strong>Manx</strong> -- Espresso, white chocolate, caramel and steamed milk</ul>
              <ul><strong>Savannah</strong> -- 5 shots espresso, dark chocolate, coffee, steamed milk</ul>
              <ul><strong>Egyptian Mau</strong> -- Chai and steamed milk</ul>
              <ul><strong>Siamese</strong> -- Chai, 2 shots espresso and steamed milk</ul>
              <p id="coffee-maker">
                All coffee is made using
                <a href="https://www.kittytowncoffee.com/">Kitty Town Coffee</a>
              </p>
              <ul>**All pastries are made fresh daily. Please come on over to view available selections**</ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div class="products">
        <h3 id="products">Products</h3>
        <hr />
        <p>Want to visit with our wonderful and adoptable kitties?</p>
        <p>
          Here's a small example of the toys availble for use. All toys can be
          purchased in-house or through
          <a href="https://www.christhecat.com/">ChrisTheCat</a>
        </p>
        <p>
          All proceeds go to local rescues. <a href="#local_rescues">See below</a> for
          those we work with
        </p>
        <div class="grid-container">
          <div class="grid-item">
            <img
              src="./assets/BumbleBee.jpg"
              alt="bumblee cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Bumblee Bee</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/Dragonfly.jpg"
              alt="dragonfly cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Dragon Fly</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/LightningRod.jpg"
              alt="lightning rod cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Ligtning Rod</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/PolychromePom.jpg"
              alt="polychrome cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Polychrome Pom</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/PuffCatty.jpg"
              alt="feather cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Puffy Cat</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/SummerShrimp.jpg"
              alt="colorful shrimp cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Summer Shrimp</h4>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div class="meet_our_adoptable_cats">
        <h3 id="meet_our_adoptable_cats">Meet Our Adoptable Cats</h3>
      <hr />
        <div class="grid-container">
          <div class="grid-item">
            <img
              src="./assets/Evie1.jpg"
              alt="Evie"
              id="adoptable cat Evie"
              height="300px"
              width="250px"
            />
            <h3><i>Evie</i></h3>
            <p>
              This chatty catty will charm you with her little chrips and
              trills. A bit independent, but loves food/treats and shoulder
              scritches. She becomes the biggest cuddler if you have chicken or
              ice-cream!
            </p>
          </div>
          <div class="grid-item">
            <img
              src="./assets/Knack1.jpg"
              alt="Knack"
              id="adoptable cat Knack"
              height="300px"
              width="250px"
            />
            <h3><i>Knack</i></h3>
            <p>
              Absolute sweetest girl! If you want a lap cat, she is purrfect for
              you! She's happiest curling up on a warm lap with a blanket. No
              torti-tude for this sweetie-pie!
            </p>
            <p><strong>**Bonded pair with Knick**</strong></p>
          </div>
          <div class="grid-item">
            <img
              src="./assets/Knick1.jpg"
              alt="Knick"
              id="adoptable cat Knick"
              height="300px"
              width="250px"
            />
            <h3><i>Knick</i></h3>
            <p>
              He will be your best friend. He loves cuddles, will sleep beside
              your pillow all night, and sit beside your desk at home. He's a
              social butterfly who will greet you (and everyone else!) at the
              door when you come home.
            </p>
            <p><strong>**Bonded pair with Knack**</strong></p>
          </div>
          <div class="grid-item">
            <img
              src="./assets/Teddy1.jpg"
              alt="Teddy"
              id="adoptable cat Teddy"
              height="300px"
              width="250px"
            />
            <h3><i>Teddy</i></h3>
            <p>
              AKA: Starvin Marvin! This boy demands attention and food at every
              turn. He's very social, affectionate and easily trainable if food is
              involved. </p> 
              <p>This smart boy has learned several tricks, including:
              sit, touch and high-five!</p>
          </div>
          <div class="grid-item">
            <img
              src="./assets/Romeow1.jpg"
              alt="Romeow"
              id="adoptable cat Romeow"
              height="300px"
              width="250px"
            />
            <h3><i>Romeow</i></h3>
            <p>
              This handsome boy lives up to his name and will charm his way into
              your heart. He wants nothing more than to cuddle. He knows no one
              can say no to those beautiful, green eyes.</p>
              <p>Will you be his Juliet?</p>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div class="local_rescues">
        <h3 id="local_rescues">Local Rescues</h3>
        <hr></hr>
        <div class="grid-container2">
            <div class="grid-item2">
                <h4>Dakota's Dream</h4>
                <a href="http://dakotasdream.org/"><img src="./assets/Dakotas_Dream_Logo.png" /></a>
            </div>
            <div class="grid-item2">
                <h4>SPCA Nova</h4>
                <a href="https://spcanova.org/"><img src="./assets/SPCA-NOVA-Logo.png" /></a>
            </div>
            <div class="grid-item2">
                <h4>Frederick County Esther Boyd Animal Shelter</h4>
                <a href="https://www.fcva.us/departments/animal-shelter"><img src="./assets/FCAS.jpg" height="250px" width="250px"/></a>
            </div>
      </div>
      <footer>
        <h5>Copywright © 2023</h5>
        <p>
          This website is a personal project by <a href="https://michaelameissner-portfolio.vercel.app/">Michaela Meissner</a> and is not an
          actual cat café.
        </p>
      </footer>
    </div>
    </div>
  );
}

export default App;
