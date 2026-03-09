/**
 * 金雷电机公司官网JavaScript文件
 * 版本: 1.0.0
 * 日期: 2026-03-08
 * 描述: 包含网站的交互功能
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    /**
     * 移动端菜单切换功能
     * 作用: 点击汉堡菜单按钮时，显示或隐藏移动端菜单
     */
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    /**
     * 平滑滚动功能
     * 作用: 点击锚点链接时，平滑滚动到目标位置
     */
    // 使用事件委托，减少事件监听器数量
    document.addEventListener('click', function (e) {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

    /**
     * 表单提交功能
     * 作用: 处理联系表单的提交事件
     */
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // 显示提交成功提示
            alert('留言已提交，我们会尽快与您联系！');
            // 重置表单
            this.reset();
        });
    }
});