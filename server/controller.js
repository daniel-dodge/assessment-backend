const fortunes = ["A person of words and not deeds is like a garden full of weeds.",
"A pleasant surprise is waiting for you.",
"A short pencil is usually better than a long memory any day.",
"A small donation is call for. It’s the right thing to do.",
"A smile is your personal welcome mat.",
"A smooth long journey! Great expectations."]
let fortuneCount = 6
let isListOn = false
module.exports = {
    getCompliment :  (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
                               "Your Javascript skills are stellar.",
            ];
          
            // choose random compliment
            let randomIndex = Math.floor(Math.random() * compliments.length);
            let randomCompliment = compliments[randomIndex];
          
            res.status(200).send(randomCompliment);
            
          },
        getFortune : (req,res) => {  
          
            let randomIndex = Math.floor(Math.random() * fortunes.length)
            let randomFortune = fortunes[randomIndex]
          
            res.status(200).send(randomFortune)
          },
        addPost : (req,res) => {
            // console.log(req.body)
            const {fortuneInput} = req.body
            fortunes.push(fortuneInput)
            // console.log(fortunes)
            fortuneCount++
            if (isListOn === true){
                // module.exports.getList()
            }
            res.status(200).send(`${fortuneCount}`)
        },
        clearPosts : (req,res) => {
            let addedFortunesAmt = fortunes.length - 6
            if (addedFortunesAmt >= 0 ){
            fortunes.splice(6,addedFortunesAmt)
            // console.log(fortunes)
            fortuneCount = fortunes.length
            if (isListOn === true){
                // module.exports.getList()
            }
            // console.log(fortuneCount)
            res.status(200).send(`${fortuneCount}`)
            } else {
            res.sendStatus(400)
            }
        },getList : (req,res) => {
            isListOn = true
            res.status(200).send(fortunes)

        }

    }