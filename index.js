document.getElementById('about').onclick = function() {
    document.getElementById('id').classList.add('nav_text_About');
    document.getElementById('input').classList.add('search');
    document.getElementById('input').classList.remove('none');
    document.getElementById('id1').classList.remove('nav_text_About1');
  }
document.getElementById('about1').onclick = function() {
    document.getElementById('id1').classList.add('nav_text_About1');
    document.getElementById('input').classList.add('none');
    document.getElementById('input').classList.remove('search');
    document.getElementById('id').classList.remove('nav_text_About');
}