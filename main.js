//1初始化键盘数据
var hashA = initHash();
var keys = hashA['keys'];
var hash = hashA['hash'];

//2生成键盘
formkeyborad(keys, hash);

//3监听用户操作
ListenToKeyborad(hash);



// -------------------------------------------------------------------------------函数


//A初始化hash数组的值
function initHash() {
    var keys = {
        0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',],
        1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',],
        2: ['z', 'x', 'c', 'v', 'b', 'n', 'm',],
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
        d: 'https://www.dribbble.com',
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

    //存储用户数据
    var hashInlocalStorage = JSON.parse(localStorage.getItem('LocalS') || 'null'); //加载本地缓存
    if (hashInlocalStorage) {
        hash = hashInlocalStorage;
    }
    return {
        'keys': keys,
        'hash': hash
    }
}

// B生成键盘界面
function formkeyborad(keys, hash) {
    for (index = 0; index < keys.length; index++) {
        var row = keys[index];

        var divE = createElement('div', 'row')
        keyN.appendChild(divE);

        for (index2 = 0; index2 < row.length; index2++) {

            var kbdE = createElement('kbd', 'kbds')
            divE.appendChild(kbdE);

            var spanE = createElement('span', 'words')
            spanE.textContent = row[index2];
            kbdE.appendChild(spanE);

            var butE = createElement('button');
            kbdE.appendChild(butE);
            butE.textContent = 'EIDT'; //编辑按钮
            butE.id = row[index2]; //给每个butE添加ID

            var imgE = createImg(hash[row[index2]]);
            kbdE.appendChild(imgE);

            customeFix(hash,butE);
            localStorage.setItem('LocalS', JSON.stringify(hash)); //存入本地缓存

        } //butE作为容器,target可作为用户点击的目标
    }
}

//B.1生成键盘组件
function createElement(target_Name, class_Name) {
    var element_Name = document.createElement(target_Name);
    if (class_Name) {
        element_Name.className = class_Name
    }
    return element_Name;
}

//B.2生成图片
function createImg(link) {
    var imgE = createElement('img', 'icons');

    if (link) {
        imgE.src = link + '/favicon.ico';
    }
    else {
        imgE.src = './src.ico';
    }
    imgE.onerror = function (imgWrong) {
        imgWrong.target.src = './src.ico';
    }
    return imgE;
}

//C.1监听键盘
function ListenToKeyborad(hash) {
    document.onkeypress = function (keyPress) {
        key = keyPress.key;
        website = hash[key];
        // location.href = website;地址栏输入  
        window.open(website, '_blank');
    }
}

//C.2用户修改网址
function customeFix(hash,element) {
    element.onclick = function (butePress) {
        var img2 = butePress.target.previousSibling;
        var keyme = butePress.target.id;
        var customeWeb = prompt('输入网址');
        hash[keyme] = customeWeb; //hash变更   
        img2.src = hash[keyme] + '/favicon.ico';
        img2.onerror = function (wrongWeb) {
            wrongWeb.target.src = './src.ico';
        }
    }
}