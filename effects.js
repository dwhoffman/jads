/*
 * Aventura do Saber , a educational fantasy action RPG
 * Copyright (C) 2012  Francisco Fernandes - ITSimples.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var effect = me.AnimationSheet.extend({
    init: function(x, y, Image, spritewidth, spriteheight , animation , speed) {
	
        this.parent(x, y, Image, spritewidth, spriteheight);
 
        this.addAnimation("sprite", animation);
 
        this.animationspeed = me.sys.fps / speed;
    },
    
    update: function() {
        this.setCurrentAnimation("sprite", function(){ me.game.remove(this) });
        this.parent(this);
        return true;
    },
    
    onDestroyEvent: function() {
    }
});