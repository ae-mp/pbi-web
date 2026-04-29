const footer = `
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                
                <div class="col-md-4 mb-3">
                    <h3>Primera Biosolutions Inc.</h3>
                    <p class="fst-italic"> <b>P</b>assion in what we do. <br> Gives <b>B</b>ack to our community. <br> Provide <b>I</b>nnovative products and services.</p>
                </div>

                <div class="col-md-4 mb-3">
                    <h3>Operating Hours</h3>
                    <p> MONDAY-FRIDAY <br> 7:30 AM TO 4:30 PM </p>
                </div>

                <div class="col-md-4 mb-3">
                    <h3>Contact Us</h3>
                    <ul class="list-unstyled">
                        <li>📍 G/F 161 Aquirre Ave., BF Homes, Parañaque City</li>
                        <li>📞 (+632) 8772 1351</li>
                        <li>✉️ pbi@primerabiosolutions.com</li>
                    </ul>
                </div>
                
            </div>

            <hr class="border-secondary my-3">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <p class="small mb-0">&copy; ${new Date().getFullYear()} Primera Biosolutions Inc. All rights reserved.</p>
                </div>
            </div>

        </div>
    </footer>
`;

document.getElementById("footer").innerHTML = footer;