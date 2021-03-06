import '../styles/Home.css';

const Home = () => {
    return (
        <div class="contain">
            <div class="top">
                <div class="menuBar">
                    <h2>Oasis</h2>
                    <img alt = '' class="menu-btn" src="https://img.icons8.com/metro/26/000000/menu.png" />
                </div>

                <div class="carousel">
                    <img alt = '' name="slide" />
                    <h1 class="title">Oasis</h1>
                    <br />
                    <p class="first">
                        Limited Space, Unlimited Styles<br />
                    </p>
                    <button class="shopNow">Shop Now</button>
                </div>
                {/* <marquee>Remember Us For Bedroom, Living Room, Dining Room, Graden, Office</marquee> */}
            </div>

            <section class="content">
                <div class="description">
                    <h4 class="shopByCategory">Shop By Category</h4>
                    <ul class="category">
                        <li><img alt="bedroomFurniture" src="https://img.icons8.com/bubbles/50/000000/bed.png" /></li>
                        <li><img alt="livingRoomFurniture" src="https://img.icons8.com/office/30/000000/interior.png" /></li>
                        <li><img alt="kidsFurniture" src="https://img.icons8.com/bubbles/50/000000/child-safe-zone.png" /></li>
                        <li><img alt="kitchenDiningFurniture" src="https://img.icons8.com/bubbles/50/000000/cutting-board.png" /></li>
                        <li><img alt="bathroomFurniture" src="https://img.icons8.com/doodle/48/000000/bath.png" /></li>
                        <li><img alt="outdoorFurniture" src="https://img.icons8.com/bubbles/50/000000/camping-chair.png" /></li>
                        <li><img alt=">officeFurniture" src="https://img.icons8.com/bubbles/50/000000/office.png" /></li>
                    </ul>
                </div>


                {/* <div class="Inspirations">
                    <h2>Decor Inspirations For Your Space</h2>
                    <ul>
                        <li><img class="inspiration" alt="Fresh Outdoor Look" src="assets/outdoor.jpg"><br />Fresh OUTDOOR LOOK </li>
                        <li><img class="inspiration" alt="Cozy Bedroom" src="assets/bed.jpg"><br />Cozy BEDROOM</li>
                        <li><img class="inspiration" alt="Alluring Portraits" src="assets/hausphotomedia.jpg"><br />Alluring POTRAITS</li>
                    </ul>
			    </div> */}

                <div class="checkout-path">
                    <p>Use shopping lists to manage and organize your needs</p>
                    <ol>
                        <li>Create your shopping list</li>
                        <li>Place your order</li>
                        <li>Get your Items delivered</li>
                    </ol>

                </div>

                <div id="text">
                    Furniture Deals Enhancing INTERIOR Galmour & Style
				<p>Find your dream living room... We all have a story to tell. Your living room is the place where you share the story of who you are. Our living room furniture helps you share it all with your family and favorite people.</p>

                    <p>Who says you can???t mix business with pleasure? It might be work, but it doesn???t have to feel like it. All it takes is a comfy chair and a table that is organised. We have all that it takes to turn your job into your dream job.</p>
                </div>


                {/* <div class="top-picks">
                    <h2>top picks for you</h2>
                    <ul>
                        <li><img class="top-picks-image" src="assets/round-sofa.jpg"> SpringHill Suites Trundle Sofa</li>
                            <li><img class="top-picks-image" src="assets/rug.jpg"> Highland Rug</li>
                                <li><img class="top-picks-image" src="assets/basket.png">Wooden Hamper Baskets</li>
                                    <li><img class="top-picks-image" src="assets/two-chairs.jpg">Speckled Glass Votives</li>
                                        <li><img class="top-picks-image" src="assets/office.jpg">Graf Lantz Tissue Box Cover</li>
                                            <li><img class="top-picks-image" src="assets/single-chair.jpg">Saddle Desk Chair</li>
				</ul>
			</div> */}

                <section class="featuring">
                    <caption> Featuring all you need to know to make yourself at home.</caption>
                    <caption>Ready to refresh your space?</caption>
                </section>

            </section>

            <section class="contact">
                <div class="proposalRequest">
                    <h2>Request A Proposal</h2>
                    <form>
                        <input class="text-input" type="name" name="yourName" placeholder="Your Name" required /><br />
                        <input class="text-input" type="name" name="business" placeholder="Business Name" required /><br />
                        <input class="text-input" type="email" name="mailId" placeholder="Email" required /><br />
                        <input class="text-input" type="text" name="help" placeholder="How Can We Help You?" /><br />
                        <input class="proposal-button" type="button" value="Send" onsubmit= {{href:('home.html')}} />
                    </form>
                </div>

                <div class="contactInfobox">
                    <h2>Contact Information</h2><br />
                    <div class="contactinfo">
                        <strong>PHONE</strong>&nbsp;&nbsp;&nbsp; (+977)9841271365<br />
                        <strong>EMAIL</strong>&nbsp;&nbsp;&nbsp; email@gmail.com<br />
                        <strong>LOCATION</strong>&nbsp;&nbsp;&nbsp; Kalimati, Kathmandu
				</div>
                </div>
            </section>


            <footer class="bottom">&copy;2020 Oasis Furnitures. All rights reserved</footer>
        </div>
    );
}

export default Home;