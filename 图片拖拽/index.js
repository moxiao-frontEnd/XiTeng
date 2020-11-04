// 第一步 获取节点
const fill = document.querySelector('.fill')
const empty = document.querySelectorAll('.empty')

// 第二步 fill的事件监听
fill.addEventListener('dragstart', drageStart)
fill.addEventListener('dragend', drageEnd)

// 第四步 循环empty盒子并设置事件监听
for (const emptys of empty) {
    emptys.addEventListener('dragover', dragOver)
    emptys.addEventListener('dragenter', dragenter)
    emptys.addEventListener('dragleave', dragleave)
    emptys.addEventListener('drop', dragDrop)
}

// 第三步 fill拖动函数
// 拖拽函数
function drageStart() {
    console.log('000');
    this.className += ' hold'
    // 设置定时器,让图片在托起的时候隐藏,
    setTimeout(() => {
        this.className = 'll'
    }, 0)
}
// 放开函数
function drageEnd() {
    console.log('111');
    this.className = 'fill'
}

// 第五步 empty函数

// 在本容器范围内触发
function dragOver(e) {
    // 阻止默认事件
    e.preventDefault();
    console.log('1');
}
// 被鼠标拖动的内容，在容器范围内触发
function dragenter(e) {
    // 阻止默认事件
    e.preventDefault();
    this.className += ' hovered'
    console.log('2');

}
// 被鼠标拖动的内容，离开容器范围内触发
function dragleave() {
    this.className = 'empty'
    console.log('3');

}
// 释放鼠标触发
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
    console.log('4');

}