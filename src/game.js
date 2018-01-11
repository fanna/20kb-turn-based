var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
// Draw borders of the game
ctx.fillStyle = "#ffd700";
ctx.fillRect(0, 0, 480, 250);
ctx.fillStyle = "#e5c519";
ctx.fillRect(5, 5, 470, 240);
ctx.fillStyle = "#008413";
ctx.fillRect(10, 10, 460, 230);
ctx.fillStyle = "#ebd5b3";
ctx.fillRect(280, 10, 190, 230);
//////////////////////// INITIALIZERS
var i1 = new Image();
var i2 = new Image();
var i3 = new Image();
var i4 = new Image();
var i5 = new Image();
var i6 = new Image();
var i7 = new Image();
var i8 = new Image();
var i9 = new Image();
var i10 = new Image();
i1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAVFBMVEUAAAAAAAAAAD8AEGsAIZQAOcYNDQ0VFRUcHBwkFAAoKCgsGQAxMTE5OTk6IwJAQEBIKgJRMAhYWFhbOAtmQBJra2ttbW17WSCAgICQkJCdfTz8+PBeKMgIAAAAAXRSTlMAQObYZgAAArFJREFUeAGl0gFXIjkQBOBtWLp7kiZhAuzq+f//51Vl8tiMenq6hQ8yCd+r1vhDvpXvsx9fzsZevprBDoyIMh7hMoUbybTn0POKaU+KkF244zN7epqYPFiSffx/MIsH02VZRl36jHmEP9RwHsk+Z7IFBlKx0nnK9xkGOhyPRz7CqHJ9wOZn7JyODCDYWILZfzFlLM5+EJHD4Sg5s2n8LcGY10z+MNkCNhYc3T9kfg6RkVImlnTLnsmDJTmeTqdjZ4o1H3Q35Z4ZD1JNcjq9vJxOIuuqY72MKfmVV0wNmxbVe8PPRfQKtvxkW0ZdgmJ0YjKYn8+iOfOmwa6LLPmyrqVkPaPONrdjfScwo5ZLyWALmV6ut9ttLeo1bOTBqNzNvFaXfLnAiZTrtYiu6/X2+3ZRqTWBuO+YOjeiBWYsjFzXf36XVS4rA+atujkyMSpHWXMwuizLirZFSgG88OKjhfc8mDmDsjOOl8zgs0CBMYsglW5mvqU1w6kOJqp4y1RZyXAe77CKMkbRRzLWUChjorW3LO4sU1HEkO0TLvcypt7bG9bu56HMU6KDSmG8Q9kgvhNuM0PZ3aSfYw0rDGSMEfoGJtozlg1lobw9/HeUrOqJiEejbmZzWbjyFnoWXinHFbHx2/nMeplRJdcxVH/vfURjyh3DY+KZKBkyGONhJr4xv7eYWN2u2lTDO1v6iK58pRBz2dJanRiehFEPDxRAMUB49Mrh7QNGRZZrQbIz2OKhC1PfYepaPRystEIYNFETD+0NM6uduXj1ChblV9SopQZQtFSdd6dkNSYWrTlvzRsZKn5FqwhYiwbLMjDfs21KVbDmXsHwCjbio9bQFlSCtU+MdQmuhjf8sOO5f5/DhqEsqFgmM7PawiTIxlzPjeK5NjALvLYu+cNenr6Sv2LfyLfZv1DDTQfsOWr+AAAAAElFTkSuQmCC"
i2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAgVBMVEUAAAAAAAAAAD8ABEsAEGsAIZQAOcYcHBwkFAAoKCgsGQAxMTE0IAA6IwJAQEBIKgJLS0tRMAhYWFhbOAtjY2NmQBJra2txSxp4UAN4eHh7WSCAgICIZCiQkJCRcTCZeAqdfTyjhjqojBCtra20kFO0tLS8pBTMqXTRwRrpxZn8+PA1xKepAAAAAXRSTlMAQObYZgAAAyZJREFUeNql1FGXmkgQBeA4wCosbdGWZbdtSRNCSCb//wfmdpPoOoMPM3t9wHP0OxerWr5sPpXPsy8fzsJ+fTR/WFGY0WwKhMPwFZmQr30fgrCIV+9V1VORQsUKC/2wKGSAE2ZIKETwuQxUXC43Viys7Xuohb2izglbOMrSt9RPoXhkNjH6T9mPzIQNwRKz93aaenpkKonJO2aTQZVmNUjxyEQTCw9s6AVIvFgisqkr0Btmx0eGZCZE7NElnFQo3jCTWNNndlMBjNFkqPXDawg9PTLkkYE4JznWQLVQ0odilW0CHNIrNw1OnmEwMqotJi/Y2XumqW3D2gNJYxhlS9iwbadeTBja9ywvgBtWDKIhdDSNWdxLVbaTEA+ByvItM0XKntzUszX70+F7Y2HY8ktV0WANlFRIeWe3HC5hctbWl8ultuJErLXGWztQwMtTcivMumFgdjmqGjLTNA1KjJ8wM0wqTjHQZaKJvfxTihorgaN/wtw0OYezsvwHpsyMBbGs7Mf4hOH7AS6zH5MGJrDoSbA7jnGWVWZwpoKIywxKKLHRExGUxtGvsLIyr1NAH5aHZAVGo+J0tTH6OEd+w4CqyizPAXI9lBOYG7OjygzKj6zKaXA2DHGPYPhsc3CTLfnR+3lW9XxnWeU4lKTp5+dIZiTRG0OzUtQx9d1ZCbCE1TkoOMcLM7iS0Zk5YijzPN/YXVVWFcvWEMKtbNS2lVkN0BhV443dECJiyRgBu5e1NEbDeZRwKwwZhuXJ+lehjDQSeVRlt86cc7jFP4xSmfFRcAVJbnzCQo8MLquWZ23TKBtwEO91XmcMlAcJ1RgdmaNQ3iajy/u4zmxmKlC7Jk0QarfdHw57YsHSdY0hDi4ps9tRHCkq77bdFTkdAEe/ztDHNqNdWnKMAvXturiOnrUhEEjd+aS82e6/nRd2Oh46WWck9X6zuXbdnmbMLdptfT0fz5fL+ZRzWGPYqtBpsznjvY4yz97U3bXbd4fj8bRkhdEIVYGd8ECcZfwZ3bY+n+u6/hfycFxnPqmyOoOVZRz9z1nxy64dWJap8s5+XT6S/8U+kU+z37lkn0Hw6MKWAAAAAElFTkSuQmCC"
i3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAgVBMVEUAAAAAAAAABEsAEGsAIZQAOcYcHBwkFAAsGQAxMTE0IAA6IwJAQEBEAABIKgJLS0tRMAhYWFhbOAtdBABmQBJxSxp0NBR4eHh7WSCAgICIZCiKQReQkJCRcTCdfTyfSxejhjqyWBi0kFO0tLTEZBjMqXTcdxnpxZnyhhb0lzn8+PCdfKj9AAAAAXRSTlMAQObYZgAAA0lJREFUeAG91sF24joMBuCZkiFu3NE1HltN4ybCXDWYef8HvJJDaYBu2sX9z2HhxXd+2cqCHz+/le+zH1/Owv5+NWeWuZyY0Q/T4ZL9NI3DXDKT84jefgx4YcynwtmH8bDKhaFDRNdd2MvLO5tPLCxO12wSxpwRUOvae1YKM/l+f8NGLix14MWBuWenWZgb1qpebiwzcYY6pf2EsTCQq71Jrt5kJmLUOg/t58yOom4Yl0y01EF3z/KZHY/CFiVs6KkwEWndZUp7zbIdp4+LMVNK0sEzSQCcR7cwv2KkDBFTImJ50HEINZEK1TqFVbV2zbK2HYauNVa3PniArpUDFF7qxC1l4cLyiUhY79vff37+hEGYAzB6aKUuqesAatnYr+9GTDa0//zb/vltlYHU6cm0UoeorqusHz/aSmVxiB4g6gc9gvcBrJNQycl5FLcM2a8YK+tlUcMwiXoTFvXQ9zHMTB4ELvve2muWZLglwgZl07SXcaMrnByAQ6Ps8fGDzbO2DW9rFoRJhEFh3YDvtGy3YlwoJ9tf2o6jc35QJQsEC6Wgsq2W3TLzzvaH4xSd75cysF0H84m8t4+P2+3jds0yJRP3VU37t+Ohd04vN/beCrPAp4J2t9s9XTMmNH5SN8kCjgcPEHp5yQAAyiDxien59Xm3W7F5ljY4P0IY9jKa9VGe31fWASCmwrR7eX2+MGaZEq0dpiXBdFb3HWNwC7OA4pi2T7vXVVtlJk7nxOAlIQQPC9MyRMaHh+3TVRsjGD++u1GdxC1Mu0jZZrN5WLfNMzoDw2KGXpX+QGNBqjJhEiZZtwnzVlYgqo9B4i2EpUwUIbH+3C3jgjKlq1MeZG8VLwwSETFTKtTds1TrpiVDjBeWpCnPnFhnvG/zUmdr3dj3fWWCLNIsXbOWbZpblkvyWudEyYQSYU6Uo5JFcaKCTdPcs1pnwlQ/MGUyo7WpMGsZctk0za8bRsIcOmNMPKirDKyREVXJtQo1wpprlirzVlzQ29UyOaWsTK9VkrJfVyynEyHUKa2FEONZWeI5c5Frfc5wYU6ZNZq2bY1BFlbKvBGGlTVrRpXVKe0SU5POrPmU5Xemq1u7lCtjEZxu2d+Xr+X77H/9z/UfADi8IeQOxzoAAAAASUVORK5CYII="
i4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAaVBMVEUAAAAAAAAAAD8ABEsAEGsAIZQcHBwkFAAoKCgsGQA0IAA6IwJAQEBIKgJLS0tRMAhYWFhbOAtmQBJra2txSxp4eHh7WSCAgICIZCiQkJCRcTCciICdfTytra20kFO0oEjMqXTpxZn8+PAZELUAAAAAAXRSTlMAQObYZgAAAuxJREFUeAGl0tFS4zgQheHxTFhhN6JR02karcYO8/4PuUftOHEl7AXMr6oUF/o4Lpd/DN/q++zHl1vZn692Zr+iwy9p89qynLaWeW7VVSQN/aA9i2xTYHtXu0uh0Nvbjh1w6v3Yx2lZ5gYHlojohkXtnkEtbWM6V6c9O8Rpy/J/rOauXNTpdu1QcWfHlmaciJgdbEyjV6YsemFYimMVrHnrDH8Iw4hZRZ5SrgpGfF07Oy7iuOEzakaJBGRNgmXVzLdrh5RSKWbWmgsQG/JQzmmUKqrE92sHopzZmkm87ISKnVnOYD6X/dpWwUWy2aWj/O/PQxZZnQQjruV2DWNSjj/ZFsxRLnLOY05EKhPlcr8mLkUMzFXNNJB5bS1cMCp5t9Z7OPTnaW6nxc1xG81rzR3MZ6Wcp7s1w4WV+crO3/Xs3rfVK8uUduwhjq3/+DSf2RzsNAdCmMxpuF17kM6sfeCeGVwwbK2oiKpMw5XFFk7BQvX5Y3FTtW3OIHojaB52LAxO8f5OTmCOu3A9D4WIcsbY/Vr2/mSnjxlcWT2UCYLkRNMElu7WsnkzXK242lk8czAWLiPmaEjpurYl3ryYCaWUWeGqu/YtyfFtM9h0s4YK1qzAiCE4W8e6KiNYTtMna9mqt2Zi7t6dGA62WAhrwcb92pZ6nVtVa3BquG/dhOI0gU1pvF1DEsyCYYeENUsW6icYfj9h2VRFpP8wLhVSLK0nr2z8bI1UmSlFREySN1WmNGXOedytPT49v7wej0+PSbS25pGZyM7h8Qhsuq49PR/f33//fn4cBtL4OELpxeDwCJZzpuvay/t7Z09pGDBXZIuF9s84TRldGbbQ8WlALCqlMOxeSaiYyxf2+vrSe+yMFDGzonx1ocCK6oWB4IWsLImrsRVXLXpR47TGpZQdi/4Zeixe1mMcBpvTVrlnzysjhZPuVkVQdI7v2etzCpZEYfZqK4fiexaRKMnlSywXlIPxlf15+1p/w77et9l/CzOOo6EA264AAAAASUVORK5CYII="
i5.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAgVBMVEUAAAAAAAAABEsAEGsAIZQVFRUcQAAmAAAoKCgsGQA0cAQ5OTlEAABENDRIKgJLS0tUREBYWFhbOAtdBABmQBJoVFBra2ttbW1xSxp4UAN5ZWF+AACAgICIZCiciICcnJydfTyjAACzn5O0kFO0tLS8AADMqXTMyMTTAADpxZn8+PCcENAhAAAAAXRSTlMAQObYZgAAA19JREFUeNq91utyozgQBeCxGQa0NALUwKyQuDmQeOf9H3BPSx4He1K1lfzYU3GBU3w+tIQr+Xb6Ur7Ovn06kf36bG4s+R5TNXnVzHOzNb756X8iW3H6I+8suKTxcwG2bc3W9w1+Gv6IeX9ncJXfNl9VOKANZ01RcOH/g+XVvM3eN8L6zYMpxVTY/ISkdVd+yPIGCOmrqt+C6xW7fWcSVZbdVJ7/ZAU+PqTBcDDyVrndOcd8OuV5WvrhnJyfGKaysUvlVRXVXKFK+/xEaZ6eUtRhlEe24TIegZDfdXNFxhiZLZX5Qh36HhkGk1EcU4a6N7+9zdmPzdhlNJHlg0cd3JFJnSU4QCXubS50ixg7msDS7lInkic2hjbnds6Kqu+1GZeXl2VsjaGwCfWluz0VdzaDoctRhhBnSmsLJVmspjSwaSiBkONKzuxYUIAKXePL66uwcdSBlcMA98DwMG7MmTZW//XjxWqUoe31n8AWm4rLh2Ea6uSBNX5jQoUxgZh2XHB9CFhGRNmpHi4XmS85sN4zrpeOBQUmHoLCTWKtVscUnD+wCnXW6L/tEuYBCyLGuv16DVtT+2mahgOrmt42urVhGRYrG2a0jUo7t+7XfcXulBPS3VkpdX2BvZUuO7aamJmMxZiacO6kDX3i/J0NcL2vdIsPt+3Ysluv19UR9k8pEsfi2FF9ZJeuLBrfsLFQltddpnGOsf1mxNpYzfjlCo1H89B26eqi7xmubXlHRDm6IczpxDmW5Twwf/F11RNTa6DWoFaX2UUQomhnjnXdcGDTdBkqjKFJZoeUZ1phIWVVbauId3ax7sCGCfFwCiUrmCw6Kfs7hohXdlJXvrO8Qx1SKhblcDt4UdYKwf5ZSxmxY+fkLu/se5LHvpzZBch4YRmFkR4JbZkghA4MX77gBvXAYhGQAoNjSf3OkNDna2aMtcr2cpZhTRRYTEaRlQ8sCTvSlY/MoCqEQ90TC64DG+owXWQYTkruDnXETE8sH8A6hrsxhDgwxgnef8jO9YCU4phWMIqMQ5W82IHxA5O/Oh1YzRJyO4Hdem4HMH5iZ7BQ10XG64ExqkLxM4MCk7qujMxFRoExTAb6yJJzZKGuDnOzrPidCYyMDuyMBFaGOqIj41vgn9gv/6l8nf2//3P9C1YooqFn5LHKAAAAAElFTkSuQmCC"
i6.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAWlBMVEUAAAAAAAANDQ0YNAAcHBwcQAAkTAAoWAAwZAQ0cAQ8gAhEAABMiBBbOAtclBRdBABsoBh7WSB8rCB+AACAgICIZCiQuCiZeAqjAACojBC8pBTRwRr89Fj8+PAQ9rI2AAAAAXRSTlMAQObYZgAAAytJREFUeAGl0+uS2zYMhuGseCB4sMhKu6lcJfd/m30Be1TL4/xY98vGM+voCUAC+vHxVt5nP76dG/v93dxZr7dM60ZKLvzYnywpxRiDc/3ytV/4Z34OZsZcRZW5HU5EWXRuXS/Xr65q+/w8M+ISahnqiJB7uXVba+3rHxiqjWVpqKKZ52z1YFvfr6pObF27MuHJsYySATc3cMoo17frxucD6zRw73EMztbmmU/Cr9kY6dfrGmJ+rGYstZz0HrTPe/Z9UC1UFA+EKHM5WKfJjY9lwcVUxs9lGXYvOgFVtXMIF/NcUjjYRnp0PraliZSB0buPFlI7LmYaCYzwYBOpDudjTpIbF5mCn9i9afIcrFMpzzlh4gOrFufc9DF5kZzpy1+u+69fF1joMBQiZhf8E8N599cX7ek2sUz7fr34YMzRHyhTbToz4nlaOFYMOFr2Tlqix7U7VOZ71PrEiBPmVEqMSaS1se+NFdOZ6ZlcYMumvj0xEPMaTZlwQvasMXRjnv6dqrqeGWgxZGcLKc9Df8cp65NHuUlzYnGYIY19ijGDLCPYhuA4ra7TI5OfC8gUVebkyoDsLNcMM1fVnNm8L+WWXFinkly0dSY5nVx/YGW3WvqO3G8+0ibroioFnL4xk8IHlvfRMNHZ8ylJoYrg+I4wcZhCP0EPto+ihv/JO+5dkbl0c1zrzZn9j2UMiDAGHmVnNSHaelK/zaKu9w9evINhQBa23uuO/eMuf3uFCSfMxFzFbQfrRyIPDDbjco2Xr6CFuJGU8sB1XF9fMpltNUrQJUThYhBzLeAqTT6xVauJRQ9YiuhAdNFwok5ZPTMUqUGjM8iWhOKA5mbZ1j8x19lbXX9CSZRzDGDDCe8PlfOZ9Y2/zhZJjbGEIgxCJ7bi+frMKideg86VcxhDRWVWQweRSnlmuDpNglLWVNllurtLCVtae2aWvJFGSmFVuodZbrdSYO0VkzuzHe3KvLGAipkX4jXz+oaIJEXEB6eMdUHFTDXW4QXrlXjiNN4fG030cMj5FbN4FzXB4Q0VSwpW9jUDBRG5wRAg1trM1QaXpOWD/f78Tv4XeyNvs38BrzpkDclfGsAAAAAASUVORK5CYII="
i7.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAmVBMVEUAAAAAAAAYNAAcHBwcQAAkFAAkTAAmAAAoKCgoWAAsGQAwZAQxMTE0cAQ8gAhAQEBEAABLS0tMiBBYWFhbOAtclBRdBABjY2NmQBJra2tsoBhtbW1xSxp4UAN4eHh7WSB8rCB+AACAgICIZCiQkJCQuCiRcTCZeAqcnJyjAAC0kFO0tLS8pBTMqXTMyMTRwRrpxZn89Fj8+PAmsRNfAAAAAXRSTlMAQObYZgAAA5BJREFUeAG91tFy2joQxvFau92wkVc2SmRApQbnYAgJhHP6/g93VnLiGO6Si37D+KLDb/6uDEx+FN/a99mPL29gf766d4bMIiHu9zHGkObFWFNMB/Nfv3avr2+6kSUlMW4Si5l5IxauXLVYtc/ZPT3dsM3InBG5za1azam7Zfucy4xYLN3mWs29vd6wMOQyY40Rh4BaMWbIwkOrOXUTps4F13WDkoIt2bDtOaGslFWrtk13OWF5WNcozjkujCH2260zysZbLVfD/25kiPntTdewthjQWGVOMwCfBwOLdrV7njAioyweO4wxCHAka9mZS1cYgE/2oDV1EwaZHTl4AZAgLMwJICyLWpddtUpuNzIAIOf88UhYwg6IiVhCECTCf6Hu0pq6KBfXTG+gSIOyms9LQFTU99utkPB5DXXdDPJhtZoyA21R6b/N5/OqhJJIU+pAUOT8sqx1Wc6v2XjKkEZM4XLpg6SsfTmvFWWobH7FEGFk6Bylg0EiQqT9+QU+XFVVUwaI+M4KcMGzpBGKZVqe9wDJ6GnesNks59JqSY9OL4qJ1d3pDKG6piir8qpmEGdFsQOomxijV6VXn2Jkne97n1lTlVeMnSXUFEjXJeVjrjFZJXo6mam7qeHPn0gzgBDWRwkiIcToFLleydZ7J1AnV5ZlO2H3y8MSDGAM4Xhcs/gQ3pFGRZiwzivLqm3bT3a6nO4BJOi7jt06nSK5vlckzPk56FnBsKoaGRxO/x0AWXTcdUzEMSPKy6yAar5YLFaTGiwPlxMAEqd1zZ2NfYzCQ0pfBhJb7BbPb5MfBbg/nC6AgJgY3dUh35/VeIJ6NSkHMw1Oa8pSDYde0+2DF5Y8S/l3AgrAGeRNT/J0yLWUQ9k8PubU4MSlJwDWGhIdjUzV6TdkR4wsQd2jiAsaTXPK0JLzIepRjUzP/5AVIKnKexQf07N2kgczw1HXT9lBW6P7YLHPLDs21rltf83u74sPBe81t9mktwSfHQM55/STlj7gI1NTKMwKc837fzYhRlXKGAHZsbtsk6KRxSgKa4DsOKng1z6EHCOEGbGz1kdlsf9kOjWNQpVklan4nS6OVQExi+grXp2kfqk0WEKXoWFxuaRaEkoxax2LizHEKcsO6m6A6SudZsnMQEecmYvidROmiyLQdArBgME0YwxkpUxTw6O4ZeoAlKWgGQZFVkgkTlRmFUf25+lL+z77u39z/Q/cgZO7Q+IufQAAAABJRU5ErkJggg=="
i8.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAb1BMVEUAAAAAAAAAAD8ABEsADk4AG18AK3MGNnoPQ4cVFRUbU5McHBwnY5soKCgxMTE3c6dEAABENDRHg7NLS0tUREBYWFhdBABil8FoVFB4eHh5ZWF+AACAgICciICjAACzn5O0tLS8AADMyMT89Fj8+PCu+8GEAAAAAXRSTlMAQObYZgAAA1xJREFUeAG91utS4zgQBeBBqC9upJFkFF9iEu+Gef9n3CN7yQTIbBX82FMhBbY/taSWq/jx8K18n/34cnb266v5l3nPRMSiZiGlJC7Ol8Nz1z27hzv5zaDAdENgT/EF7KH76egOe3l5Y5uSXfWNHV4OPx+eojf6D0YtolDI2JuPz4fnn130kvjNPdpdxm+sH5P5pxZPqTd+3J71pp+YgInskzwDYp7kvZfQhyC8K/OfmG77gcehzrDjuH36FMIiJpuC/siCEEr1yBnZtgVDNKXnsxgRlL/DAqkFpCmU2xMQVF8CqzHd28lAW3jYXBpRy1KyMLbyysbs7zEljzgkLxgfUxwNjeh7w19MjGJ3mMiu4jSVBhUzRDVJtpyHTAR1l9HOXl8vc0RJ0hDETMghhPg/MGJm717/vmzOk6ggLqL6ru4zVjPzxxU5ek8eF5Td8nqK3sPdZyhmI5q2FCyuKa84YsG4QHlWpT+xcfxr69qyLETecEr65qCWRYO6P7B+a1FzSrSfGDBTWdARDeS8u8PwZNhVCIIZjiNMi+gZUXLMjI39yNQw7t5p6Y1sZ8k0WZs5O1LVZRnyeya2tGB2QXu0ABbq8VFD0mVjhixIvmW8XVILwdQ8HKOcPICFdmdwPiC6IL9ZVyMPuGktqsbOESteNBWBXgYwA7N3LJZKGUx2Jfj4FlJmUdMrC4r1X1mZS5eHAWxXpnwNiakM2Xm1dsDPN2yuXaxwokDWlrM7VRZ870zM0MxbtpZYS60DqVDbwD6EFNRMTYTbInPsvCjuvGOnMpV5zkNrRFA0IeEnJAsmKocokrt52pzdbslTrZc55wy2nviN9Rba1lzWytnFyySKDMNwZVCnvLH5svp19vPqg+r2C9ixva7TpchHdjrV2Ny0gs3rPgThu9Y8r0eXXRfnA+/Xrmxap3LKJGDrXHIWCwnHuW8JKng0HmqM9IGdTtMlWgqaj8cqtpHWJLMAnzRjbWjSJzbN6/aSjS37q/Y7ISm7EtdamPl2bad6mTq4kJDQiLaGISxqCLtaukNllltWp8sUD3Abg2mkFqKyS1TD2rrK8o6VCTs5R2KWFiCIORaqkRCV0uF2jJ9ZOeCx2EVqiYQdmCOGKlRiu7A53AXLV/br5Wv5Nvt//+f6B3+bcTDgzt2QAAAAAElFTkSuQmCC"
i9.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAllBMVEUAAAAAAAAVFRUYNAAcHBwcQAAkFAAkTAAmAAAoKCgoWAAwZAQxMTE0cAQ6IwI8gAhAQEBEAABIKgJLS0tMiBBRMAhYWFhbOAtclBRdBABjY2NmQBJra2tsoBhxSxp4eHh7WSB8rCB+AACAgICIZCiQkJCQuCiRcTCdfTyjhjq0kFO0oEi0tLS8AADMqXTRwRrpxZn8+PBDZFQYAAAAAXRSTlMAQObYZgAAA5xJREFUeNq91tF22jgQBuDKklZhxlrhWiHCrAwmxKS0DfT9X67/iLJgcvYiudj/JCRw+BhpRtHJF/WpfJ59+XDO7NdH84c1yKyeKWO99ylLhmEcBzuEYYhMpFRXK2OUMni8ZaZu1T2LnNKQM1xhtQHC4/PzDWtrpXSI4YZJsXxhADW+8XjLZh3WGEsuLAlDMvOFmda0dwzFYIZBWHHWpyRFx1AYtiGsfseMqOOQzi7aISWg4zFPmLlnSnPMwzFHQT66IQCN2B6bC6vvmBGmjGafxuQzUSQewYbgrDX/wZboZGFGZA5sKdkwhuCESDr0ozBzZcvmytRP5dhZjtp7bfG8aRTSCkMtdcMalDuz8sYKzHHlyhO1/KmQssJaganbRS5reb8jZ7XWFvux+AxRSGEyOKApWxZmQ0qsHWN+7BS2dXYzS1ZdmLqyJTKbCQuBXZRZ51SxNSiMOE9UdTCFmQkzYIbRuxBjGo7jWEU2TD7IyJmqti0NmzJEXnSMYjqkIWBf0btAMY9IoKruIMrXlInTYKQ5sMYTFpayHK9AusLm3rPtssdrMjJniTRSEZH3MUkC2bI5865a/6YQ7RzKWU3kKsyOvU9pt2Ima7C5Uu7KpNjm7e8zY68toTfaeTDyafV9xeRmfzZ3U2273G43byu8hGYPqMZDis4Fz0QUVqfdyrkyuencUAys/4pWonXYWcqYu43FcWHW4nzBTNl227+9wlmfMjmCSlHHGMBcf9o9YeiVlJsuEnl6Pez7r9oD5OMRf+MJLII9Hk4bYeiiuHY9YXDf+r6p5CAT8JCsVHO2Px12T9parcS1L3fMVH81zcMDHAJKmpNn3b+edvtHQ1glXP2yWEyYLfdNRgUvIwetMA29OZwO+82TYTgpt56yJSe5EqNEKEGqh6bZHw773dPKeBY2R7ErW+JWkEtrSEKQM62sbvr9t91u9Wi9l5tosb5lbdt1Wo5fuERkIhe9J423W85efnaLrrsyqK5FGxwRyzksLOVox1GuSiRnLqxtF92/DJ/xUiv0D4EF9uKSzmBIzjmgSWbWzdu2vbLFj38wTRhUoxKGjNZj3Qkb9gylVb2Yz+c3bP2jLeeYy8FAd7LMAetCVfxCTpQxdwzFamGyNjTBI9JMTxVhhFYMvpWZ37PWgBkWcGaFohyTJUhQdWbrlyt7aZXE3TD2zNgRMZgTdWHrKbuUY+KLgrFkocr9/G6Rv54/lM+z//d/rt/yCo2eIB0R9AAAAABJRU5ErkJggg=="
i10.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAAdVBMVEUAAAAAAAANDQ0VFRUcHBwkFAAoKCgsGQAxMTE0IAA5OTk6IwJAQEBEAABIKgJLS0tRMAhYWFhbOAtdBABjY2NmQBJra2txSxp4eHh7WSB+AACAgICIZCiRcTCdfTyjAACtra20kFO0tLTMqXTRwRrpxZn8+PA6Tq20AAAAAXRSTlMAQObYZgAAA8JJREFUeAG91tGSoygYBeCBH1kFBURpZIX0kJ7M+z/iHkw2Y7p6L2Yu9lSNFR0/zw8mVf2N/VH+nH377dzZz9/NgzFEMqnkOgof0jWHXEq51Fo/PupHLSlHWq2UxFrOjCRJqzYhApgrqZT8YLdacopEm5J3uO//MiKGMoUy7X3YXUo5H21N1ksJUcBJIilfWOuzclNiaCzElMuTXS4lRU2kNoKjE2uOlNwEDSHEuDcGd4f4lKNB3WrBGJ0YnKJxJjKNxZxTQZpEUiopaEFya2XszKBoHcG8h0uXkktbHg6oTLUGo4m+s89MElGbEcyjMLfB4qWgqH7c6u128Qez7GVIH6PX21/dgK6UEvoyDhm1WNwltcXpNuTK6MyYNsZ8B0MRmrB1IXqffM5xYAyX/UCkVr366E+MSIMRNVbw/BI9xjXGG9bSGSISo9WbMfrMJDGz9WRMR8dtEDl7M7BpmRgbBjC1SbkZ/fK6pWU0vpEZoNqdXRcQPOPH9Q2sQxmUpu3Tt2SVJOeeBizl7foDhaFcQsfYtkuUd1BKKiK+vjA4kuKNBj8wueOZPtdbCbiOGQ2G6Ed5MMVPDI6slLPCJhBvqwnZh5oMQwZsKSkhRyLq+S+2LNM0MVKzfHMl4dE0mOSHIbTDYEIuCWwlsis/sb+RZVnmWW4i4e2G4H0afGeS8TG1n4LHkIrW695P05nBTXZeR2F8Kjmlgw0BZzmn9rLFSPa6W9z3ZO/vjfXWrlJorU0ACy4OgwdLwWiM3Yt+3+2CG38xOLCxn4Xg7WsWgnMuuntw3nHRC7uvQC8MbhlHCcc7bbROyXnvfPQp4jGa83vZfzASM+867ZZFY0tdKU7jo0bZKMZ9b+j9/ZVND8Y77paYFwQmucXhSq/EjBmhXhjUZK0kUmDM8UtdclxcXmrmjSkh3tqGtILX1903Jg/G2OXGPi4s31jNrGNoE2Lfp88MaaxtM+ccrHPsVpm7seRwxrGR/b5O0xdsBJNS0MGaREsHcTC4FQx9X7GeC9nqznkyOy1HXpm1tucHixVFv1CrFLOyXzFs5Gotp1ZWq+Mu8oeMFWwWX7AJwey9tATVRbB6487xxioYph/BpumFreuOrD1RD6bxX129hVttrKtx0ULcGXJme4sFk4Q2F3W3LOEjOrYsblmyw+jWrs0hT4bNOAKlwBAXs4NEb8gxdGDK3me6Xp9svjuOrsY04hxkgHFO644E2OGQJ+OP9MT71nawxz8c7r8be0Qp9ZnRnT3r7kHZwdTdndjP/ffy5+x//ZvrH7c0gjsnARbWAAAAAElFTkSuQmCC"
var mage = {id: 1, name: "Hemoth, The Elder Mage", image: i1, x: 10, y: 194, atk: 11, def: 5, currentPlayer: false};
var elf = {id: 2, name: "Dwala, The Elven Warrior", image: i2, x: 64, y: 194, atk: 15, def: 8, currentPlayer: false};
var knight = {id: 3, name: "Knight Nicholas", image: i3, x: 118, y: 194, atk: 17, def: 9, currentPlayer: false};
var human = {id: 4, name: "Mauricius, The Swift", image: i4, x: 172, y: 194, atk: 12, def: 7, currentPlayer: false};
var dwarf = {id: 5, name: "Gru, The Dwarven Paladin", image: i5, x: 226, y: 194, atk: 9, def: 17, currentPlayer: false};
var characters = [mage, elf, knight, human, dwarf];

var e1 = {id: 6, image: i6, x: 10, y: 10, atk: 8, def: 6, currentPlayer: false};
var e2 = {id: 7, image: i7, x: 64, y: 10, atk: 14, def: 10, currentPlayer: false};
var e3 = {id: 8, image: i8, x: 118, y: 10, atk: 17, def: 12, currentPlayer: false};
var e4 = {id: 9, image: i9, x: 172, y: 10, atk: 6, def: 10, currentPlayer: false};
var e5 = {id: 10, image: i10, x: 226, y: 10, atk: 3, def: 5, currentPlayer: false};
var enemies = [e1, e2, e3, e4, e5];

var entities = characters.concat(enemies);

var movableX, movableY;
var AImovableX, AImovableY;
var movableImage;

// Draw images on game load
i1.onload = function() {
  entities.forEach(function(i) {
    ctx.drawImage(i.image, i.x, i.y);
  });
};

var selectionPhase = false;
var movementPhase = false;
var turn = 1;
//////////////////////// END OF INITIALIZERS

// Object finding function by its key and value
function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

// Object finding function by its two keys and two values
function findObjectByTwoKeys(array, key1, value1, key2, value2) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key1] === value1 && array[i][key2] === value2) {
      return array[i];
    }
  }
  return null;
}

// Character object position changer
function changePlayerPos(posX, posY, array){
  // Find current playing character
  var obj = findObjectByKey(array, 'currentPlayer', true);
  obj.x = posX;
  obj.y = posY;
}

// Character movement function
function movement(numberX, numberY, x, y, character, array, enemies){
  // Upcoming character coordinates
  mx = x + numberX;
  my = y - numberY;
  // Check if movement is battle (if the enemy is taking the upcoming position)
  if(battle(mx, my, array, enemies) == true) {
    // Move character if battle is over
    ctx.fillStyle = "#008413";
    ctx.fillRect(x, y, 54, 46);
    ctx.strokeStyle="#FF0000";
    ctx.strokeRect(x, y,54,46);
    changePlayerPos(mx, my, array);
    ctx.drawImage(character.image, mx, my);
    movementPhase = false;
  }
}

// AI TURN
function aiMove(){
  // Choose random enemy
  enemy = enemies[Math.floor(Math.random() * enemies.length)];

  // Choose random direction of movement
  direction = Math.floor((Math.random() * 4) + 1);
  // Select chosen enemy
  enemy.currentPlayer = true;
  AImovableX = enemy.x;
  AImovableY = enemy.y;

  // Move enemy based on chosen direction
  if(direction == 1){ //N
    if(AImovableY >= 56) {
      movement(0, 46, AImovableX, AImovableY, enemy, enemies, characters);
    }
  }
  if(direction == 2){ //E
    if(AImovableX <= 180) {
      movement(54, 0, AImovableX, AImovableY, enemy, enemies, characters);
    }
  }
  if(direction == 3){ //W
    if(AImovableX >= 64) {
      movement(-54, 0, AImovableX, AImovableY, enemy, enemies, characters);
    }
  }
  if(direction == 4){ //S
    if(AImovableY <= 180) {
      movement(0, -46, AImovableX, AImovableY, enemy, enemies, characters);
    }
  }
}

// Battling function
function battle(mX, mY, array, enemies){
  // Find currently playing character
  var character = findObjectByKey(array, 'currentPlayer', true);
  // Find enemy that is taking that position
  var enemy = findObjectByTwoKeys(entities, "x", mX, "y", mY)

  if(enemy != null){
    enemy.def -= character.atk;
    character.def -= enemy.atk
    if(enemy.def <= 0){
      enemy.x = 10000;
      enemy.y = 10000;
      if(character.def <= 0){
        character.x=10000;
        character.y=10000;
      }
      return true
    }
    else if(character.def <= 0){
      character.x=10000;
      character.y=10000;
    }
    else {
      return false
    }
  } else {
    return true
  }
}


// Character selection function, with character stats displaying in sidebar
function selection(character){
  // If character is dead don't display its stats
  if(character.def <= 0){
    uiText("SELECT", "CHARACTER");
  } else {
    character.currentPlayer = true;
    movableX = character.x;
    movableY = character.y;
    movableImage = character.image;
    ctx.fillStyle = "#ebd5b3";
    ctx.fillRect(280, 10, 190, 230);
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(character.name,310,25);
    ctx.fillText("Attack: " + character.atk,310,100);
    ctx.fillText("Defence: " +character.def,310,120);
    ctx.drawImage(character.image, 350, 30);
    movementPhase = true;
    selectionPhase = false;
  }
}

// Function for big text on the sidebar
function uiText(text1, text2){
  ctx.fillStyle = "#ebd5b3";
  ctx.fillRect(280, 10, 190, 230);
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(text1,310,100);
  ctx.fillText(text2,310,135);
}

// Function for small text on the sidebar
function uiPhaseText(text){
  ctx.fillStyle = "#ebd5b3";
  ctx.fillRect(280, 180, 190, 20);
  ctx.font = "12px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(text,310,220);
}

// MAIN GAME LOOP
// Input checking function
window.addEventListener('keydown',this.check,false);

// Game start initializer text on the sidebar
uiText("PRESS ENTER", "TO PLAY");

// Function for keyboard imput checking
function check(e) {
  var code = e.keyCode;

  // SELECTION PHASE
  // Read input from player for selecting the playable character
  if(selectionPhase == true){
    // 1
    if(code == 49 && characters[0]["x"] < 500){
      selection(characters[0]);
    }
    // 2
    else if(code == 50 && characters[1]["x"] < 500){
      selection(characters[1]);
    }
    // 3
    else if(code == 51 && characters[2]["x"] < 500){
      selection(characters[2]);
    }
    // 4
    else if(code == 52 && characters[3]["x"] < 500){
      selection(characters[3]);
    }
    // 5
    else if(code == 53 && characters[4]["x"] < 500){
      selection(characters[4]);
    }
    else {
        uiText("DEAD, CHOOSE", "DIFFERENT");
    }
  }

  // MOVEMENT PHASE
  // Checking input for movement
  if(movementPhase == true){
    uiPhaseText("MOVEMENT PHASE");
    var character = findObjectByKey(characters, 'currentPlayer', true);

    // RIGHT
    if(code == 39){
      if(movableX <= 180) {
        movement(54, 0, movableX, movableY, character, characters, enemies);
        uiText("PRESS ESC", "TO END TURN");
      }
    }
    // UP
    if(code == 38){
      if(movableY >= 56) {
        movement(0, 46, movableX, movableY, character, characters, enemies);
        uiText("PRESS ESC", "TO END TURN");
      }
    }
    // LEFT
    if(code == 37){
      if(movableX >= 64) {
        movement(-54, 0, movableX, movableY, character, characters, enemies);
        uiText("PRESS ESC", "TO END TURN");
      }
    }
    // DOWN
    if(code == 40){
      if(movableY <= 180) {
        movement(0, -46, movableX, movableY, character, characters, enemies);
        uiText("PRESS ESC", "TO END TURN");
      }
    }
  }

  // END TURN
  // Check if ESC is pressed
  if(code == 27){
    var obj1 = findObjectByKey(characters, 'currentPlayer', true);
    obj1.currentPlayer = false;
    turn++;
    aiMove()
    var obj2 = findObjectByKey(enemies, 'currentPlayer', true);
    obj2.currentPlayer = false;
    selectionPhase = true;
    movementPhase = false;
    uiText("SELECT", "CHARACTER");
  }
  // Check if game started (if Enter was pressed)
  if(code == 13){
    selectionPhase = true;
    uiPhaseText("SELECTION PHASE");
  }
}

// Battlefield arena drawing
var arena = new Path2D();

for (i = 0; i < 270; i+=54) {
  for (j = 0; j < 230; j+=46) {
    arena.rect(i+10, j+10, 54, 46);
  }
}

ctx.strokeStyle="#FF0000";
ctx.stroke(arena);

