var keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ],
    length: 3
}
var hash = {
    q: 'https://www.qq.com',
    w: 'https://www.weibo.com',
    e: 'https://www.easyicon.net',
    r: 'https://www.runoob.com',
    t: 'https://www.taobao.com',
    y: 'https://www.youtube.com',
    u: 'https://www.uupoop.com',
    i: 'https://www.iconfont.cn',
    o: 'https://www.oschina.net',
    p: 'https://www.pexels.com',
    a: 'https://www.acfun.cn',
    s: 'https://www.ssyer.com',
    d: 'https://www.dy2018.com',
    f: 'http://www.ftium4.com',
    g: 'https://www.github.com',
    h: 'https://www.hanyi.com',
    j: 'https://www.jianshu.com',
    k: 'https://www.keybr.com',
    l: 'http://www.lookae.com',
    z: 'https://www.zhihu.com',
    x: 'https://www.xiezuocat.com',
    c: 'https://www.csdn.net',
    v: undefined,
    b: 'https://www.bukun.top',
    n: 'https://www.nike.com',
    m: undefined,
}
var hashInlocalStorage = JSON.parse(localStorage.getItem('LocalS') || 'null'); //加载本地缓存
if (hashInlocalStorage) {
    hash = hashInlocalStorage;
}
index = 0;

while (index < keys.length) {
    row = keys[index];
    divE = document.createElement('div');
    divE.className = 'row';
    keyN.appendChild(divE);
    index2 = 0;
    while (index2 < row.length) {
        kbdE = document.createElement('kbd');
        kbdE.className = 'kbds';
        spanE = document.createElement('span');
        spanE.textContent = row[index2];
        spanE.className = 'words';
        kbdE.appendChild(spanE);
        butE = document.createElement('button');
        butE.textContent = 'EIDT'; //编辑按钮
        butE.id = row[index2]; //给每个butE添加ID
        butE.onclick = function (butePress) {
            img2 = butePress.target.previousSibling;
            keyme = butePress.target.id;
            customeWeb = prompt('输入网址');
            hash[keyme] = customeWeb; //hash变更   
            img2.src = hash[keyme]+'/favicon.ico';
            img2.onerror = function(wrongWeb){
                wrongWeb.target.src = './src.ico';
            }
            localStorage.setItem('LocalS', JSON.stringify(hash)); //本地缓存
            console.log(hash);
        } //butE作为容器,target可作为用户点击的没目标
        imgE = document.createElement('img');
        imgE.className = 'icons';
        if(hash[row[index2]]){
            imgE.src = hash[row[index2]] + '/favicon.ico';
        }
        else{
            imgE.src = './src.ico';
        }
        imgE.onerror = function (imgWrong){
            imgWrong.target.src = './src.ico';
        }
        kbdE.appendChild(imgE);
        kbdE.appendChild(butE);
        divE.appendChild(kbdE);
        index2 = index2 + 1;
    }
    index = index + 1;
}
document.onkeypress = function (keyPress) {
    key = keyPress.key;
    website = hash[key];
    // location.href = website;地址栏输入  
    window.open(website, '_blank');
}