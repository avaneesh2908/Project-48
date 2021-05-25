class Security {
    constructor() {
        this.level1 = createButton('Level 1');
        this.level1.position(120,160);
        this.level1.style('background', 'lightgrey');
    }
    display() {
        this.level1.mousePressed(() => {
            this.access1 = createInput("");
            this.access1.position(50,140);
            this.access1.style('background', 'white');
            this.button1 = createButton('Check');
            this.button1.position(50,170);
            this.button1.style('background', 'lightgrey');
            this.hint1 = createButton('Hint');
            this.hint1.position(190,170);
            this.hint1.style('background', 'lightgrey');
            this.level1.hide();
            this.button1.mousePressed(() => {
                if(system.authenticate(accessCode1,this.access1.value())){
                    this.button1.hide();
                    this.access1.hide();
                    this.hint1.hide();
                    if(hint == 1) {
                        score = score+5;
                        this.question1.hide();
                        this.text1.hide();
                    }
                    else {
                        score = score+10;
                        this.question1.hide();
                    }
                    hint = 0;
                    this.level2 = createButton('Level 2');
                    this.level2.position(310,370);
                    this.level2.style('background', 'lightgrey');
                    this.level2.mousePressed(() => {
                        this.access2 = createInput("");
                        this.access2.position(250,350);
                        this.access2.style('background', 'white');
                        this.button2 = createButton('Check');
                        this.button2.position(250,380);
                        this.button2.style('background', 'lightgrey');
                        this.hint2 = createButton('Hint');
                        this.hint2.position(390,380);
                        this.hint2.style('background', 'lightgrey');
                        this.level2.hide();
                        this.button2.mousePressed(() => {
                            if(system.authenticate(accessCode2,this.access2.value())){
                                this.button2.hide();
                                this.access2.hide();
                                this.hint2.hide();
                                if(hint == 1) {
                                    score = score+5;
                                    this.question2.hide();
                                    this.text2.hide();
                                }
                                else {
                                    score = score+10;
                                    this.question2.hide();
                                }
                                hint = 0;
                                this.level3 = createButton('Level 3');
                                this.level3.position(520,160);
                                this.level3.style('background', 'lightgrey');
                                this.level3.mousePressed(() => {
                                    this.access3 = createInput("");
                                    this.access3.position(450,140);
                                    this.access3.style('background', 'white');
                                    this.button3 = createButton('Check');
                                    this.button3.position(450,170);
                                    this.button3.style('background', 'lightgrey');
                                    this.hint3 = createButton('Hint');
                                    this.hint3.position(590,170);
                                    this.hint3.style('background', 'lightgrey');
                                    this.level3.hide();
                                    this.button3.mousePressed(() => {
                                        if(system.authenticate(accessCode3,this.access3.value())){
                                            this.button3.hide();
                                            this.access3.hide();
                                            this.hint3.hide();
                                            if(hint == 1) {
                                                score = score+5;
                                                this.question3.hide();
                                                this.text3.hide();
                                            }
                                            else {
                                                score = score+10;
                                                this.question3.hide();
                                            }
                                            hint = 0;
                                            this.level4 = createButton('Level 4');
                                            this.level4.position(710,370);
                                            this.level4.style('background', 'lightgrey');
                                            this.level4.mousePressed(() => {
                                                this.access4 = createInput("");
                                                this.access4.position(650,350);
                                                this.access4.style('background', 'white');
                                                this.button4 = createButton('Check');
                                                this.button4.position(650,380);
                                                this.button4.style('background', 'lightgrey');
                                                this.hint4 = createButton('Hint');
                                                this.hint4.position(790,380);
                                                this.hint4.style('background', 'lightgrey');
                                                this.level4.hide();
                                                this.button4.mousePressed(() => {
                                                    if(system.authenticate(accessCode4,this.access4.value())){
                                                        this.button4.hide();
                                                        this.access4.hide();
                                                        this.hint4.hide();
                                                        if(hint == 1) {
                                                            score = score+5;
                                                            this.question4.hide();
                                                            this.text4.hide();
                                                        }
                                                        else {
                                                            score = score+10;
                                                            this.question4.hide();
                                                        }
                                                        hint = 0;
                                                        this.level5 = createButton('Level 5');
                                                        this.level5.position(920,160);
                                                        this.level5.style('background', 'lightgrey');
                                                        this.level5.mousePressed(() => {
                                                            this.access5 = createInput("");
                                                            this.access5.position(850,140);
                                                            this.access5.style('background', 'white');
                                                            this.button5 = createButton('Check');
                                                            this.button5.position(850,170);
                                                            this.button5.style('background', 'lightgrey');
                                                            this.hint5 = createButton('Hint');
                                                            this.hint5.position(990,170);
                                                            this.hint5.style('background', 'lightgrey');
                                                            this.level5.hide();
                                                            this.button5.mousePressed(() => {
                                                                if(system.authenticate(accessCode5,this.access5.value())){
                                                                    this.button5.hide();
                                                                    this.access5.hide();
                                                                    this.hint5.hide();
                                                                    if(hint == 1) {
                                                                        score = score+5;
                                                                        this.question5.hide();
                                                                        this.text5.hide();
                                                                    }
                                                                    else {
                                                                        this.question5.hide();
                                                                        score = score+10;
                                                                    }
                                                                }
                                                                state = 1;
                                                            });
                                                            this.hint5.mousePressed(() => {
                                                                this.text5 = createElement('h2');
                                                                this.text5.html('Hint: E S L C E I N');
                                                                this.text5.position(950,150);
                                                                this.hint5.hide();
                                                                hint++;
                                                            })
                                                            this.question5 = createElement('h2');
                                                            this.question5.html('What is so fragile that saying its name breaks it?');
                                                            this.question5.position(700,90);
                                                        });
                                                    }
                                                });
                                                this.hint4.mousePressed(() => {
                                                    this.text4 = createElement('h2');
                                                    this.text4.html('Hint: O E N E E V P L');
                                                    this.text4.position(760,360);
                                                    this.hint4.hide();
                                                    hint++;
                                                })
                                                this.question4 = createElement('h2');
                                                this.question4.html('What begins with an “e” and only contains one letter?');
                                                this.question4.position(620,300);
                                            });
                                        }
                                    });
                                    this.hint3.mousePressed(() => {
                                        this.text3 = createElement('h2');
                                        this.text3.html('Hint: R L B R Y I A');
                                        this.text3.position(550,150);
                                        this.hint3.hide();
                                        hint++;
                                    })
                                    this.question3 = createElement('h2');
                                    this.question3.html('What building has the most stories?');
                                    this.question3.position(330,90);
                                });
                            }
                        });
                        this.hint2.mousePressed(() => {
                            this.text2 = createElement('h2');
                            this.text2.html('Hint: I I T D C Y N R O A');
                            this.text2.position(330,360);
                            this.hint2.hide();
                            hint++;
                        })
                        this.question2 = createElement('h2');
                        this.question2.html('Where does today come before yesterday?');
                        this.question2.position(150,300);
                    });
                }
            });
            this.hint1.mousePressed(() => {
                this.text1 = createElement('h2');
                this.text1.html('Hint: L O E T W');
                this.text1.position(150,150);
                this.hint1.hide();
                hint++;
            })
            this.question1 = createElement('h2');
            this.question1.html('What gets wet while drying?');
            this.question1.position(10,90);
        });
    }
}