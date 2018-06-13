angular.module("angular", [])
    .controller("controller", ["$scope", function ($scope) {

        $scope.PersonaIndex = 0;
        $scope.Personas = [
            {
                Id: 0,
                Select: "Visually impaired",
                Name: "Daniella",
                Photo: "http://portaldozacarias.com.br/site/arquivos/imagens/noticias/2017/11/grande/20171122140738anaa.jpg",
                Quote: "All that a dream needs to be fulfilled is someone who believes that it can be realized.",
                Age: 24,
                Occupation: "Student",
                Family: "Single",
                Location: "Brazil",
                Character: "Friendly, calm and loyal.",
                PersonalityTraits: [
                    {Name: "Introvert/Extrovert", Value: 80},
                    {Name: "Analytical/Creative", Value: 50},
                    {Name: "Conservative/Liberal", Value: 80},
                    {Name: "Passive/Active", Value: 50}
                ],
                Goals: ["Increase your level of autonomy.", "Graduate in law.", "Get married on the beach.", "Be a mother"],
                Frustrations: ["Not being able to do some activities on your own", "Lack of accessibility in public places as well as in private places.", "Lack of accessibility on the web and in applications.",],
                Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
                Motivations: [
                    {Name: "Incentive", Value: 80},
                    {Name: "Fear", Value: 50},
                    {Name: "Achievement", Value: 100},
                    {Name: "Growth", Value: 50},
                    {Name: "Power", Value: 80},
                    {Name: "Social", Value: 70}
                ],
                PreferredChannels: [
                    {Name: "Traditional Ads", Value: 50},
                    {Name: "Online & Social Media", Value: 90},
                    {Name: "Referral", Value: 50},
                    {Name: "Guerrilla Efforts", Value: 30}
                ],

                Brands: [
                    {Name: "http://adox.com.ar/wp-content/uploads/2017/04/Whatsapp_37229.png"},
                    {Name: "https://media.cdnandroid.com/bb/62/6f/4b/imagen-talkback-0big.jpg"},
                    {Name: "https://png.icons8.com/color/1600/audible.png"},
                ]
            },
            {
                Id: 1,
                Select: "Voluntary",
                Name: "Miguel",
                Photo: "https://static.pulse.ng/img/incoming/origs3879408/3806368466-w644-h960/michael-ealy1.jpg",
                Quote: " If you think you are too small to make a difference, try sleeping with a mosquito",
                Age: 32,
                Occupation: "Researcher",
                Family: "He's single, his father died when he was a teenager and now he has his mother and 3 sisters.",
                Location: "Cape Verde",
                Character: "Empathetic, kind, caring and humane.",
                PersonalityTraits: [
                    {Name: "Introvert/Extrovert", Value: 80},
                    {Name: "Analytical/Creative", Value: 60},
                    {Name: "Conservative/Liberal", Value: 75},
                    {Name: "Passive/Active", Value: 67}
                ],
                Goals: ["Make a big difference in people's lives.", "Travel to Mozambique to learn about the regional lifestyle.", "Finish his master's degree in social sciences."],
                Frustrations: ["Not being able to help everyone.", "There is too much war and unnecessary conflicts in the world.", "Technological solutions still do not meet the needs of people who have physical and intellectual limitations"],
                Bio: "Miguel was born in Africa, his father was a military man and when Miguel was a teenager his father died due to an international mission in a poor country in North Africa. Because of this, Miguel grew up always wanting to do good unto others so there will be no more sadness in the world.",
                Motivations: [
                    {Name: "Incentive", Value: 100},
                    {Name: "Fear", Value: 40},
                    {Name: "Achievement", Value: 60},
                    {Name: "Growth", Value: 60},
                    {Name: "Power", Value: 70},
                    {Name: "Social", Value: 90}
                ],
                PreferredChannels: [
                    {Name: "Traditional Ads", Value: 55},
                    {Name: "Online & Social Media", Value: 90},
                    {Name: "Referral", Value: 75},
                    {Name: "Guerrilla Efforts", Value: 30}
                ],
                Brands: [
                    {Name: "https://image.flaticon.com/icons/png/512/408/408759.png"},
                    {Name: "https://thehub.dk/files/57c6a35e8f500889068f79ab/logo_upload-d10d68a444ad6e90768832d8962eae9d.png"},
                    {Name: "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"}
                ]
            }
        ];
        $scope.model = $scope.Personas[0];

    }])