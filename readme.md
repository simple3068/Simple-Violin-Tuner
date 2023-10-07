# Simple Violin Tuner

![svt](https://github.com/simple3068/Simple-Violin-Tuner/assets/12420779/2e023849-1af6-497d-bf59-d54de7427d89)

> Simple violin tuner you can simply tune your violin. 

This is a Chrome extension version of Simple Violin Tuner. 

I was so lazy to connect to the tuner page. 

That concluded me to develop the chrome extension version of violin tuner. 

## Installation

First you need to turn on the [dev mode](https://developer.chrome.com/docs/extensions/mv3/faq/#faq-dev-01) on `chrome://extensions/`. 

Download whole files in this repo with ZIP file, place it proper directory and unzip it. 

Click the 'Load unpacked extension...' button and select the folder you just unzipped. 

![image](https://github.com/simple3068/Simple-Violin-Tuner/assets/12420779/c15c304e-e202-4d73-877e-9e60d7c7db00)

Ta-da! you just finished to install Simple Violin Tuner on your Chrome browser!

## How to use

![image](https://github.com/simple3068/Simple-Violin-Tuner/assets/12420779/b5622835-40c2-46e8-96b3-aae72f8d5595)

* Click the button you want to tune. 
* Click the button again to stop playing the tone. 

I set normal violin MIDI sound as default. -- you can customize with your own. 

## Customization

For the more specific information, you may click the 'About..' Button right below to the extension popup. 

You can change the tone sounds replacing files named with `tone#.mp3` in `/tones` directory. 

Here is the prepared templates of the tone sounds you can try. 

| # | Title | Description | Tune Frequency (Hz) |
|---|-------|-------------|---------------------|
| 1 | Violin (MIDI) | Simple violin tone sounds. (default) | G3(196)-D4(293.66)-A4(440)-E5(659.25) |
| 2 | Cello (MIDI) | Simple cello tone sounds for the bigger instrument. users. (Why don't you try Simple Cello Tuner instead?) | C2(65.4)-G2(98)-D3(146.8)-A3(220) |
| 3 | Violin (Pure tone) | Prepared for tuning fork lovers.   | G3(196)-D4(293.66)-A4(440)-E5(659.25) |
| 4 | Baroque tuned Violin (Pure tone) | For those blessed by the greatest Bach, the father of the music | G3(196)-D4(293.66)-Ab4(415)-E5(659.25) |