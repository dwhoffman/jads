/*This software is released under MIT License. Texts for  license are listed below:

 * Aventura do Saber , a educational fantasy action RPG
 * Copyright (c) 2012-2013, ITSimples Games

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// TODO - Document function

// myFunc - Function when animation is over
// self - Object where the animation is called


var effect = me.AnimationSheet.extend({
    init: function(x, y, Image, spritewidth, spriteheight , animation , speed, repeat, wait, myFunc, self) {

        this.parent(x, y, Image, spritewidth, spriteheight);
 
        this.addAnimation("sprite", animation);
 
        this.animationspeed = me.sys.fps / speed;

        if (typeof myFunc != "undefined") 
        {
            this.self = self;
            
            this.myFunc = new Function( 'self' , myFunc);
        }
		
		//Repeat the animation or not
		if( typeof repeat !== 'undefined' ) {
			this.repeat = repeat;
		}else
		{
			this.repeat = false;			
		}
		
		//Wait between animations
		this.waitBetweenAnimations = wait;
		
    },
    
    update: function() {
		if (this.repeat){
			this.setCurrentAnimation("sprite", function(){ 
				this.animationpause = true;
			});
			
			//If pause between animations
			//Put in the function the time between animations or random time
			if (this.animationpause && !Math.floor(Math.random() * this.waitBetweenAnimations)) {
				this.animationpause = false;
			}
		}else
		{
		    if (typeof this.myFunc == "undefined"){
		        this.setCurrentAnimation("sprite", function(){ me.game.remove(this); });
		    }else{
		        this.setCurrentAnimation("sprite",   function(){this.myFunc( this.self ) });
			}
		}
		
        this.parent(this);
        return true;
    },
    
    onDestroyEvent: function() {
    }
});