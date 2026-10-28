const POSTS = [
  { id: 'post-1', author: '小鹿与阿良', at: '🦌', ac: 'a1', time: '3 分钟前', badge: '日常',
    text: '下班路上遇到一片很好看的夕阳，他说「快拍，这是今天的第九张合照素材」。',
    photos: [{ e: '🌇', l: '今天的夕阳', t: 'sunset' }, { e: '🧋', l: '顺路买的奶茶', t: 'peach' }], likes: 128, comments: 12, liked: false },
  { id: 'post-2', author: '橘子汽水', at: '🍊', ac: 'a2', time: '26 分钟前', badge: '纪念日',
    text: '在一起第 520 天，他把我们这一年的照片做成了一本日历，每一页都写着当天发生的小事。',
    photos: [{ e: '📅', l: '520 天日历', t: 'mint' }], likes: 96, comments: 8, liked: false },
  { id: 'post-3', author: '一只团子', at: '🍡', ac: 'a3', time: '1 小时前', badge: '一起做饭',
    text: '第一次一起做饭，厨房像被打劫过，但番茄牛腩意外地很好吃，他说下次还来。',
    photos: [{ e: '🍳', l: '厨房现场', t: 'butter' }, { e: '🥘', l: '番茄牛腩', t: 'tomato' }], likes: 214, comments: 23, liked: false },
  { id: 'post-4', author: '阿梨 & 小满', at: '🍐', ac: 'a4', time: '3 小时前', badge: '日常',
    text: '下雨天没带伞，他绕了两条街来接我，裤脚全湿了还在笑。',
    photos: [{ e: '🌧️', l: '雨天', t: 'rain' }], likes: 76, comments: 0, liked: false },
  { id: 'post-5', author: '甜筒夫妇', at: '🍦', ac: 'a5', time: '昨天 19:40', badge: '一起出游',
    text: '周末的动物园，被长颈鹿围观了我们自拍，最后还一起坐了摩天轮。',
    photos: [{ e: '🦒', l: '长颈鹿', t: 'leaf' }, { e: '🎡', l: '摩天轮', t: 'dusk' }], likes: 189, comments: 17, liked: false }
]

const COMMENTS = {
  'post-1': [
    { id: 'c1', name: '橘子汽水', at: '🍊', ac: 'a2', text: '甜到我了！！', time: '1 分钟前' },
    { id: 'c2', name: '一只团子', at: '🍡', ac: 'a3', text: '第九张素材，素材库有点大啊', time: '5 分钟前' }
  ],
  'post-2': [{ id: 'c3', name: '阿梨 & 小满', at: '🍐', ac: 'a4', text: '这个日历也太用心了吧', time: '12 分钟前' }],
  'post-3': [
    { id: 'c4', name: '甜筒夫妇', at: '🍦', ac: 'a5', text: '第一次做饭能做成这样已经很厉害了', time: '40 分钟前' },
    { id: 'c5', name: '小鹿与阿良', at: '🦌', ac: 'a1', text: '求番茄牛腩菜谱！', time: '35 分钟前' }
  ],
  'post-4': [],
  'post-5': [{ id: 'c6', name: '橘子汽水', at: '🍊', ac: 'a2', text: '摩天轮的图好有氛围感', time: '昨天 20:12' }]
}

const PROFILE = {
  nick: '甜甜圈', at: '🍩', ac: 'a6', id: 'SW-0831',
  partner: { nick: '阿良', at: '🦌', ac: 'a1', boundAt: '2026-03-14', code: 'SW-8821' },
  level: 5, levelName: '心心相印', value: 1286, next: 1500,
  weekPosts: 6, likes: 342, comments: 28,
  records: [
    { e: '🌇', l: '周三 · 一起看夕阳', t: 'sunset' },
    { e: '🍜', l: '周四 · 楼下吃面', t: 'butter' },
    { e: '🎬', l: '周五 · 看了一场电影', t: 'dusk' },
    { e: '🌧️', l: '周六 · 雨天散步', t: 'rain' }
  ]
}

const WEEKLY = {
  range: '10.21 – 10.27 · 第 43 周', title: '我们的第 12 份周报',
  summary: '这周我们一起度过了 6 段被记录的时光',
  stats: [['6 篇', '本周记录'], ['7 天', '连续打卡'], ['+120', '亲密度'], ['58', '收到祝福']],
  days: [['一', 2], ['二', 3], ['三', 1], ['四', 4], ['五', 2], ['六', 1], ['日', 3]],
  habits: [['一起吃饭', 4], ['一起散步', 3], ['一起看电影', 1]],
  highlights: [
    { e: '🌇', t: 'sunset', title: '周三的那场夕阳', date: '10.23 · 18:42', likes: 128 },
    { e: '🥘', t: 'tomato', title: '第一次一起做饭', date: '10.24 · 19:30', likes: 214 },
    { e: '🎡', t: 'dusk', title: '周日的摩天轮', date: '10.27 · 20:05', likes: 189 }
  ],
  gain: 120, level: 'Lv.5 心心相印', percent: 86
}

const TYPES = ['一起吃饭', '一起散步', '看电影', '一起出游', '日常小事']
const PHOTO_POOL = [
  { e: '📷', l: '随手一拍', t: 'peach' },
  { e: '🍰', l: '一起吃甜品', t: 'butter' },
  { e: '🌙', l: '回家的路', t: 'dusk' },
  { e: '🐾', l: '路边的小猫', t: 'mint' }
]

const el = id => document.getElementById(id)
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

const App = {
  state: {
    page: 'welcome',
    stack: [],
    posts: POSTS.map(p => Object.assign({}, p)),
    comments: JSON.parse(JSON.stringify(COMMENTS)),
    currentPost: null,
    ckType: TYPES[0],
    ckPhotos: [],
    visibility: 'public'
  },

  init() {
    this.renderProfile()
    this.renderWeekly()
    this.renderCheckin()
    this.renderFeed()
    const hash = (location.hash || '').replace('#', '')
    const allow = ['community', 'checkin', 'profile', 'weekly'].includes(hash) ? hash : 'welcome'
    this.go(allow, true)
    window.addEventListener('hashchange', () => {
      const h = (location.hash || '').replace('#', '')
      if (h && h !== this.state.page && ['community', 'checkin', 'profile', 'weekly'].includes(h)) this.go(h, true)
    })
  },

  go(page, replace) {
    if (!replace && this.state.page !== page) this.state.stack.push(this.state.page)
    this.state.page = page
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'))
    const screen = el('screen-' + page)
    if (screen) screen.classList.add('active')
    el('viewport').scrollTop = 0

    const isTab = ['community', 'checkin', 'profile'].includes(page)
    el('tabbar').classList.toggle('hide', !isTab)
    el('appbar').classList.toggle('hide', page === 'welcome')
    el('brand').hidden = !isTab
    el('pageTitle').hidden = page !== 'detail' && page !== 'weekly'
    el('pageTitle').textContent = page === 'detail' ? '互动详情' : '本周周报'
    el('btnBack').hidden = isTab || page === 'welcome'
    el('chip').hidden = page === 'welcome'

    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === page))
    try { history.replaceState(null, '', '#' + page) } catch (e) {}
  },

  back() {
    const prev = this.state.stack.pop()
    this.go(prev || 'community', true)
  },

  toast(text) {
    const t = el('toast')
    t.textContent = text
    t.classList.add('show')
    clearTimeout(this._tt)
    this._tt = setTimeout(() => t.classList.remove('show'), 1600)
  },

  sheet(title, desc, actions, html) {
    el('sheetTitle').textContent = title
    el('sheetDesc').innerHTML = desc
    el('sheetDesc').insertAdjacentHTML('beforeend', html || '')
    const box = el('sheetActions')
    box.innerHTML = ''
    actions.forEach(a => {
      const b = document.createElement('button')
      b.textContent = a.label
      if (a.primary) b.className = 'primary'
      b.onclick = () => { this.closeSheet(); a.onClick && a.onClick() }
      box.appendChild(b)
    })
    el('sheetMask').classList.add('show')
  },

  closeSheet() {
    el('sheetMask').classList.remove('show')
  },

  /* ---------- 社区 ---------- */
  renderFeed() {
    const html = this.state.posts.map(p => `
      <article class="post ${p.isNew ? 'is-new' : ''}">
        ${p.isNew ? '<div class="new-flag">刚刚发表</div>' : ''}
        <div class="p-head">
          <div class="avatar ${p.ac}" onclick="App.avatarTip()">${p.at}</div>
          <div class="p-meta">
            <div class="name-row"><span class="name">${esc(p.author)}</span><span class="badge">${esc(p.badge)}</span></div>
            <div class="time">${esc(p.time)}</div>
          </div>
          <div class="more">···</div>
        </div>
        <div class="p-content">${esc(p.text)}</div>
        <div class="photos ${p.photos.length === 1 ? 'single' : ''}">
          ${p.photos.map(x => `<div class="photo ${x.t}"><span class="photo-emoji">${x.e}</span><span class="photo-label">${esc(x.l)}</span></div>`).join('')}
        </div>
        <div class="p-actions">
          <span class="act ${p.liked ? 'liked' : ''}" onclick="App.like('${p.id}')"><i>${p.liked ? '♥' : '♡'}</i><span>${p.likes}</span></span>
          <span class="act" onclick="App.openDetail('${p.id}')"><i>💬</i><span>${p.comments}</span></span>
          <span class="act" onclick="App.share('${p.id}')"><i>↗</i><span>分享</span></span>
        </div>
      </article>`).join('')
    el('feed').innerHTML = html
  },

  like(id) {
    const p = this.state.posts.find(x => x.id === id)
    if (!p) return
    p.liked = !p.liked
    p.likes += p.liked ? 1 : -1
    this.renderFeed()
  },

  refresh() {
    const top = this.state.posts.shift()
    if (top) this.state.posts.push(top)
    this.renderFeed()
    this.toast('刷到了新的甜蜜瞬间')
  },

  avatarTip() {
    this.toast('不支持查看他人主页')
  },

  share(id) {
    this.sheet('分享这条记录', '分享到微信或朋友圈（原型演示）', [
      { label: '分享给微信好友', primary: true, onClick: () => this.toast('已唤起微信分享（演示）') },
      { label: '分享到朋友圈', onClick: () => this.toast('已唤起朋友圈分享（演示）') },
      { label: '复制分享文案', onClick: () => this.toast('文案已复制') }
    ])
  },

  /* ---------- 详情 ---------- */
  openDetail(id) {
    const p = this.state.posts.find(x => x.id === id)
    if (!p) return
    this.state.currentPost = p
    this.renderDetail()
    this.go('detail')
  },

  renderDetail() {
    const p = this.state.currentPost
    if (!p) return
    const list = this.state.comments[p.id] || []
    el('detailBody').innerHTML = `
      <div class="d-hero-card">
        <div class="p-head">
          <div class="avatar ${p.ac}" onclick="App.avatarTip()">${p.at}</div>
          <div class="p-meta">
            <div class="name-row"><span class="name">${esc(p.author)}</span><span class="badge">${esc(p.badge)}</span></div>
            <div class="time">${esc(p.time)} · 公开分享</div>
          </div>
        </div>
        <div class="p-content">${esc(p.text)}</div>
        <div class="photos ${p.photos.length === 1 ? 'single' : ''}">
          ${p.photos.map(x => `<div class="photo ${x.t}"><span class="photo-emoji">${x.e}</span><span class="photo-label">${esc(x.l)}</span></div>`).join('')}
        </div>
        <div class="p-actions">
          <span class="act ${p.liked ? 'liked' : ''}" onclick="App.detailLike()"><i>${p.liked ? '♥' : '♡'}</i><span>${p.likes}</span></span>
          <span class="act"><i>💬</i><span>${p.comments}</span></span>
          <span class="act" onclick="App.share('${p.id}')"><i>↗</i><span>分享</span></span>
        </div>
      </div>
      <div class="section-head"><span class="section-title">评论 ${p.comments}</span><span class="muted">友善一点，甜一点</span></div>
      <div id="commentList">
        ${list.length ? list.map(c => `
          <div class="comment">
            <div class="c-avatar ${c.ac}">${c.at}</div>
            <div class="c-body"><div class="c-name">${esc(c.name)}</div><div class="c-text">${esc(c.text)}</div><span class="c-time">${esc(c.time)}</span></div>
          </div>`).join('') : '<div class="empty"><span>💌</span>还没有评论，坐等第一句祝福</div>'}
      </div>
      <div class="comment-bar">
        <input id="cInput" placeholder="说点甜的…" onkeydown="if(event.key==='Enter')App.sendComment()">
        <button class="c-send" onclick="App.sendComment()">发送</button>
      </div>`
  },

  detailLike() {
    const p = this.state.currentPost
    p.liked = !p.liked
    p.likes += p.liked ? 1 : -1
    this.renderDetail()
    this.renderFeed()
  },

  sendComment() {
    const input = el('cInput')
    const text = (input.value || '').trim()
    if (!text) { this.toast('先写一句祝福吧'); return }
    const p = this.state.currentPost
    const list = this.state.comments[p.id] || (this.state.comments[p.id] = [])
    list.unshift({ id: 'local-' + Date.now(), name: PROFILE.nick, at: PROFILE.at, ac: PROFILE.ac, text, time: '刚刚' })
    p.comments += 1
    this.renderDetail()
    this.renderFeed()
    this.toast('评论已发布')
  },

  /* ---------- 打卡 ---------- */
  renderCheckin() {
    const now = new Date()
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    el('ckDate').textContent = `${now.getMonth() + 1}月${now.getDate()}日 · ${week[now.getDay()]}`
    el('ckChips').innerHTML = TYPES.map(t => `<span class="chip-t ${t === this.state.ckType ? 'active' : ''}" data-t="${t}" onclick="App.pickType('${t}')">${t}</span>`).join('')
    this.renderPhotos()
    el('ckText').value = ''
    el('ckCount').textContent = '0'
  },

  pickType(t) {
    this.state.ckType = t
    document.querySelectorAll('#ckChips .chip-t').forEach(c => c.classList.toggle('active', c.dataset.t === t))
  },

  count(ta) {
    el('ckCount').textContent = ta.value.length
  },

  renderPhotos() {
    const list = this.state.ckPhotos
    el('ckPhotos').innerHTML = list.map((p, i) => `
      <div class="p-tile ${p.t}" onclick="App.removePhoto(${i})">
        <span class="tile-emoji">${p.e}</span><span class="tile-label">${p.l}</span><span class="tile-x">×</span>
      </div>`).join('') + (list.length < 3 ? `
      <div class="photo-add" onclick="App.addPhoto()"><b>＋</b><span>照片</span></div>` : '')
  },

  addPhoto() {
    if (this.state.ckPhotos.length >= 3) { this.toast('最多放 3 张啦'); return }
    const c = PHOTO_POOL[this.state.ckPhotos.length % PHOTO_POOL.length]
    this.state.ckPhotos.push(Object.assign({}, c))
    this.renderPhotos()
  },

  removePhoto(i) {
    this.state.ckPhotos.splice(i, 1)
    this.renderPhotos()
  },

  setVis(node) {
    this.state.visibility = node.dataset.v
    document.querySelectorAll('.vis').forEach(v => v.classList.toggle('on', v.dataset.v === this.state.visibility))
  },

  publish() {
    const ta = el('ckText')
    const text = (ta.value || '').trim()
    if (!text) { this.toast('写点什么再打卡吧'); return }
    const isPublic = this.state.visibility === 'public'
    const post = {
      id: 'mine-' + Date.now(), author: PROFILE.nick, at: PROFILE.at, ac: PROFILE.ac,
      time: '刚刚', badge: this.state.ckType, text,
      photos: this.state.ckPhotos.length ? this.state.ckPhotos.map(p => ({ e: p.e, l: p.l, t: p.t })) : [{ e: '💗', l: '今天的我们', t: 'peach' }],
      likes: 0, comments: 0, liked: false, isNew: true
    }
    this.state.ckPhotos = []
    this.state.ckType = TYPES[0]
    this.state.visibility = 'public'
    ta.value = ''
    this.renderCheckin()
    document.querySelectorAll('.vis').forEach(v => v.classList.toggle('on', v.dataset.v === 'public'))

    if (isPublic) {
      this.state.posts.forEach(p => { delete p.isNew })
      this.state.posts.unshift(post)
      this.renderFeed()
      this.toast('打卡成功，正在回社区')
    } else {
      this.toast('已存进仅彼此可见的记录')
    }
    setTimeout(() => this.go('community'), 500)
  },

  /* ---------- 个人中心 ---------- */
  renderProfile() {
    const p = PROFILE
    const percent = Math.round((p.value / p.next) * 100)
    el('profileBody').innerHTML = `
      <div class="p-hero">
        <div class="me">
          <div class="avatar-big">${p.at}</div>
          <div class="me-info"><div class="nick">${p.nick}</div><div class="uid">ShowWee ID · ${p.id}</div></div>
          <div class="mini-hearts">♥♥</div>
        </div>
        <div class="bond" onclick="App.bindSheet()">
          <div class="bond-left">
            <div class="avatar-sm ${p.partner.ac}">${p.partner.at}</div>
            <div><div class="bond-name">已绑定 · ${p.partner.nick}</div><div class="bond-time">${p.partner.boundAt} 绑定，唯一的另一半</div></div>
          </div>
          <span class="bond-more">邀请码</span>
        </div>
        <div class="level">
          <div class="level-top"><b>亲密度 Lv.${p.level} · ${p.levelName}</b><span>${p.value} / ${p.next}</span></div>
          <div class="bar"><div class="bar-fill" style="width:${percent}%"></div></div>
          <div class="level-tip">还差 ${p.next - p.value} 点升到 Lv.${p.level + 1}</div>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><b>${p.weekPosts}</b><span>本周记录</span></div>
        <div class="stat-line"></div>
        <div class="stat"><b>${p.likes}</b><span>收获点赞</span></div>
        <div class="stat-line"></div>
        <div class="stat"><b>${p.comments}</b><span>收到评论</span></div>
      </div>
      <div class="section-head"><span class="section-title">本周的记录</span><span class="section-link" onclick="App.go('weekly')">查看周报 ›</span></div>
      <div class="week-scroll">
        ${p.records.map(r => `<div class="week-item" onclick="App.go('weekly')"><div class="week-tile ${r.t}"><span class="week-emoji">${r.e}</span></div><div class="week-label">${r.l}</div></div>`).join('')}
        <div class="week-item" onclick="App.go('checkin')"><div class="week-tile add">＋</div><div class="week-label">再记一条</div></div>
      </div>
      <div class="report" onclick="App.go('weekly')">
        <div><b>本周周报已生成</b><span>6 段时光 · 亲密度 +120 · 连续打卡 7 天</span></div>
        <span class="report-btn">去看看</span>
      </div>
      <div class="note">这里只展示你自己发表到社区的记录<br>不支持查看他人主页、没有私聊、不共享定位</div>
      <div class="tabbar-note">ShowWee · 只属于恋爱中的你们</div>`
  },

  bindSheet() {
    this.sheet('唯一的绑定关系', `你和 ${PROFILE.partner.nick} 已绑定，绑定后不可随意更换`, [
      { label: '知道了', primary: true },
      { label: '关闭' }
    ], `<div class="code-box" onclick="App.copyCode()"><span class="cl">你的专属邀请码</span><span class="cv">${PROFILE.partner.code}</span><span class="cc">复制</span></div>`)
  },

  copyCode() {
    const done = () => this.toast('邀请码已复制')
    if (navigator.clipboard) navigator.clipboard.writeText(PROFILE.partner.code).then(done).catch(done)
    else done()
  },

  /* ---------- 周报 ---------- */
  renderWeekly() {
    const w = WEEKLY
    const max = Math.max.apply(null, w.days.map(d => d[1]))
    el('weeklyBody').innerHTML = `
      <div class="cover">
        <div class="cover-range">${w.range}</div>
        <div class="cover-title">${w.title}</div>
        <div class="cover-hearts">♥♥♥♥♥</div>
        <div class="cover-sub">${w.summary}</div>
      </div>
      <div class="w-stats">
        ${w.stats.map(s => `<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}
      </div>
      <div class="card">
        <div class="section-head" style="margin:0 0 10px"><span class="section-title">本周记录分布</span><span class="muted">一 ～ 日</span></div>
        <div class="bars">
          ${w.days.map(d => `<div class="bar-item"><div class="bar-track"><div class="bar-col" style="height:${Math.round(d[1] / max * 105) + 6}px"></div></div><span class="bar-num">${d[1]}</span><span class="bar-label">${d[0]}</span></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="section-head" style="margin:0 0 10px"><span class="section-title">最常一起做的事</span><span class="muted">共 8 次</span></div>
        ${w.habits.map(h => `<div class="habit"><span class="habit-name">${h[0]}</span><div class="habit-track"><div class="habit-fill" style="width:${h[1] / 4 * 100}%"></div></div><span class="habit-count">${h[1]} 次</span></div>`).join('')}
      </div>
      <div class="section-head"><span class="section-title">本周高光</span><span class="muted">被祝福最多的 3 段</span></div>
      ${w.highlights.map(h => `<div class="highlight"><div class="hl-tile ${h.t}"><span class="hl-emoji">${h.e}</span></div><div class="hl-body"><div class="hl-title">${h.title}</div><div class="hl-date">${h.date}</div><div class="hl-likes">♥ ${h.likes} 个赞</div></div></div>`).join('')}
      <div class="intimacy">
        <div class="intimacy-top"><span>本周亲密度增长</span><b>+${w.gain}</b></div>
        <div class="bar"><div class="bar-fill" style="width:${w.percent}%"></div></div>
        <div class="intimacy-foot"><span>${w.level}</span><span>距离下一等级还有一段路</span></div>
      </div>
      <button class="share-btn" onclick="App.shareWeekly()">分享这份周报</button>
      <span class="back-link" onclick="App.go('community')">回到社区</span>
      <div class="footnote">周报每周一自动汇总，不会推送提醒，想看了再来</div>`
  },

  shareWeekly() {
    this.sheet('分享本周周报', '这份周报只包含你自己发表的记录', [
      { label: '分享给微信好友', primary: true, onClick: () => this.toast('已唤起微信分享（演示）') },
      { label: '保存周报图片', onClick: () => this.toast('周报图片已保存（演示）') }
    ])
  }
}

el('btnBack').onclick = () => App.back()
document.addEventListener('keydown', e => { if (e.key === 'Escape') App.closeSheet() })
App.init()
