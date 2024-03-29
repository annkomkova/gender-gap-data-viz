$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/annkomkova/gender-gap-data-viz/main/data/gggi_all.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
    }
  });
});

function processData(allText) {
  let allTextLines = allText.split(/\r\n|\n/);
  let mainblock = $(".block");

  for (let i = 1; i < (parseInt(allTextLines.length) - 1); i++) {
      let mblock = $('.mainblock'),
          prediv = '<div class=',
          prea = '<a class=',
          linkdata = 'target="_blank"  href="',
          bsize = 'style="background-size: ',
          data = allTextLines[i].split(','),
          bg = '%; background-image: url(svg/'+data[3]+'-mainlist.svg);',
          typeoflist = 'background-image: url(svg/ray.svg);'

      //счётчик для поворотов
      let cnt06 = '--i: -7;',
          cnt07 = '--i: -6;',
          cnt08 = '--i: -5;',
          cnt09 = '--i: -4;',
          cnt10 = '--i: -3;',
          cnt11 = '--i: -2;',
          cnt12 = '--i: -1;',
          cnt13 = '--i: 0;',
          cnt14 = '--i: 1;',
          cnt15 = '--i: 2;',
          cnt16 = '--i: 3;',
          cnt17 = '--i: 4;',
          cnt18 = '--i: 5;',
          cnt20 = '--i: 6;',
          cnt21 = '--i: 7;';

      //визуализации по всем годам для стран
      let prop6 = bsize+'100% '+data[34]*100+bg+cnt06+'"/></div>',
          prop7 = bsize+'100% '+data[32]*100+bg+cnt07+'"/></div>',
          prop8 = bsize+'100% '+data[30]*100+bg+cnt08+'"/></div>',
          prop9 = bsize+'100% '+data[28]*100+bg+cnt09+'"/></div>',
          prop10 = bsize+'100% '+data[26]*100+bg+cnt10+'"/></div>',
          prop11 = bsize+'100% '+data[24]*100+bg+cnt11+'"/></div>',
          prop12 = bsize+'100% '+data[22]*100+bg+cnt12+'"/></div>',
          prop13 = bsize+'100% '+data[20]*100+bg+cnt13+'"/></div>',
          prop14 = bsize+'100% '+data[18]*100+bg+cnt14+'"/></div>',
          prop15 = bsize+'100% '+data[16]*100+bg+cnt15+'"/></div>',
          prop16 = bsize+'100% '+data[14]*100+bg+cnt16+'"/></div>',
          prop17 = bsize+'100% '+data[12]*100+bg+cnt17+'"/></div>',
          prop18 = bsize+'100% '+data[10]*100+bg+cnt18+'"/></div>',
          prop20 = bsize+'100% '+data[8]*100+bg+cnt20+'"/></div>',
          prop21 = bsize+'100% '+data[6]*100+bg+cnt21+'"/></div>';

      //мини-визуализации по годам
      let eco21 = bsize+data[35]*100+'%;'+typeoflist+'" /><p>'+(data[35]*100).toFixed(2)+'%;</p>';
      let edu21 = bsize+data[36]*100+'%;'+typeoflist+'" /><p>'+(data[36]*100).toFixed(2)+'%;</p>';
      let heal21 = bsize+data[37]*100+'%;'+typeoflist+'" /><p>'+(data[37]*100).toFixed(2)+'%;</p>';
      let pol21 = bsize+data[38]*100+'%;'+typeoflist+'" /><p>'+(data[38]*100).toFixed(2)+'%;</p>';

      let eco20 = bsize+data[39]*100+'%;'+typeoflist+'" /><p>'+(data[39]*100).toFixed(2)+'%;</p>';
      let edu20 = bsize+data[40]*100+'%;'+typeoflist+'" /><p>'+(data[40]*100).toFixed(2)+'%;</p>';
      let heal20 = bsize+data[41]*100+'%;'+typeoflist+'" /><p>'+(data[41]*100).toFixed(2)+'%;</p>';
      let pol20 = bsize+data[42]*100+'%;'+typeoflist+'" /><p>'+(data[42]*100).toFixed(2)+'%;</p>';

      let eco18 = bsize+data[43]*100+'%;'+typeoflist+'" /><p>'+(data[43]*100).toFixed(2)+'%;</p>';
      let edu18 = bsize+data[44]*100+'%;'+typeoflist+'" /><p>'+(data[44]*100).toFixed(2)+'%;</p>';
      let heal18 = bsize+data[45]*100+'%;'+typeoflist+'" /><p>'+(data[45]*100).toFixed(2)+'%;</p>';
      let pol18 = bsize+data[46]*100+'%;'+typeoflist+'" /><p>'+(data[46]*100).toFixed(2)+'%;</p>';

      let eco17 = bsize+data[47]*100+'%;'+typeoflist+'" /><p>'+(data[47]*100).toFixed(2)+'%;</p>';
      let edu17 = bsize+data[48]*100+'%;'+typeoflist+'" /><p>'+(data[48]*100).toFixed(2)+'%;</p>';
      let heal17 = bsize+data[49]*100+'%;'+typeoflist+'" /><p>'+(data[49]*100).toFixed(2)+'%;</p>';
      let pol17 = bsize+data[50]*100+'%;'+typeoflist+'" /><p>'+(data[50]*100).toFixed(2)+'%;</p>';

      let eco16 = bsize+data[51]*100+'%;'+typeoflist+'" /><p>'+(data[51]*100).toFixed(2)+'%;</p>';
      let edu16 = bsize+data[52]*100+'%;'+typeoflist+'" /><p>'+(data[52]*100).toFixed(2)+'%;</p>';
      let heal16 = bsize+data[53]*100+'%;'+typeoflist+'" /><p>'+(data[53]*100).toFixed(2)+'%;</p>';
      let pol16 = bsize+data[54]*100+'%;'+typeoflist+'" /><p>'+(data[54]*100).toFixed(2)+'%;</p>';

      let eco15 = bsize+data[55]*100+'%;'+typeoflist+'" /><p>'+(data[55]*100).toFixed(2)+'%;</p>';
      let edu15 = bsize+data[56]*100+'%;'+typeoflist+'" /><p>'+(data[56]*100).toFixed(2)+'%;</p>';
      let heal15 = bsize+data[57]*100+'%;'+typeoflist+'" /><p>'+(data[57]*100).toFixed(2)+'%;</p>';
      let pol15 = bsize+data[58]*100+'%;'+typeoflist+'" /><p>'+(data[58]*100).toFixed(2)+'%;</p>';

      let eco14 = bsize+data[59]*100+'%;'+typeoflist+'" /><p>'+(data[59]*100).toFixed(2)+'%;</p>';
      let edu14 = bsize+data[60]*100+'%;'+typeoflist+'" /><p>'+(data[60]*100).toFixed(2)+'%;</p>';
      let heal14 = bsize+data[61]*100+'%;'+typeoflist+'" /><p>'+(data[61]*100).toFixed(2)+'%;</p>';
      let pol14 = bsize+data[62]*100+'%;'+typeoflist+'" /><p>'+(data[62]*100).toFixed(2)+'%;</p>';

      let eco13 = bsize+data[63]*100+'%;'+typeoflist+'" /><p>'+(data[63]*100).toFixed(2)+'%;</p>';
      let edu13 = bsize+data[64]*100+'%;'+typeoflist+'" /><p>'+(data[64]*100).toFixed(2)+'%;</p>';
      let heal13 = bsize+data[65]*100+'%;'+typeoflist+'" /><p>'+(data[65]*100).toFixed(2)+'%;</p>';
      let pol13 = bsize+data[66]*100+'%;'+typeoflist+'" /><p>'+(data[66]*100).toFixed(2)+'%;</p>';

      let eco12 = bsize+data[67]*100+'%;'+typeoflist+'" /><p>'+(data[67]*100).toFixed(2)+'%;</p>';
      let edu12 = bsize+data[68]*100+'%;'+typeoflist+'" /><p>'+(data[68]*100).toFixed(2)+'%;</p>';
      let heal12 = bsize+data[69]*100+'%;'+typeoflist+'" /><p>'+(data[69]*100).toFixed(2)+'%;</p>';
      let pol12 = bsize+data[70]*100+'%;'+typeoflist+'" /><p>'+(data[70]*100).toFixed(2)+'%;</p>';

      let eco11 = bsize+data[71]*100+'%;'+typeoflist+'" /><p>'+(data[71]*100).toFixed(2)+'%;</p>';
      let edu11 = bsize+data[72]*100+'%;'+typeoflist+'" /><p>'+(data[72]*100).toFixed(2)+'%;</p>';
      let heal11 = bsize+data[73]*100+'%;'+typeoflist+'" /><p>'+(data[73]*100).toFixed(2)+'%;</p>';
      let pol11 = bsize+data[74]*100+'%;'+typeoflist+'" /><p>'+(data[74]*100).toFixed(2)+'%;</p>';

      let eco10 = bsize+data[75]*100+'%;'+typeoflist+'" /><p>'+(data[75]*100).toFixed(2)+'%;</p>';
      let edu10 = bsize+data[76]*100+'%;'+typeoflist+'" /><p>'+(data[76]*100).toFixed(2)+'%;</p>';
      let heal10 = bsize+data[77]*100+'%;'+typeoflist+'" /><p>'+(data[77]*100).toFixed(2)+'%;</p>';
      let pol10 = bsize+data[78]*100+'%;'+typeoflist+'" /><p>'+(data[78]*100).toFixed(2)+'%;</p>';

      let eco09 = bsize+data[79]*100+'%;'+typeoflist+'" /><p>'+(data[79]*100).toFixed(2)+'%;</p>';
      let edu09 = bsize+data[80]*100+'%;'+typeoflist+'" /><p>'+(data[80]*100).toFixed(2)+'%;</p>';
      let heal09 = bsize+data[81]*100+'%;'+typeoflist+'" /><p>'+(data[81]*100).toFixed(2)+'%;</p>';
      let pol09 = bsize+data[82]*100+'%;'+typeoflist+'" /><p>'+(data[82]*100).toFixed(2)+'%;</p>';

      let eco08 = bsize+data[83]*100+'%;'+typeoflist+'" /><p>'+(data[83]*100).toFixed(2)+'%;</p>';
      let edu08 = bsize+data[84]*100+'%;'+typeoflist+'" /><p>'+(data[84]*100).toFixed(2)+'%;</p>';
      let heal08 = bsize+data[85]*100+'%;'+typeoflist+'" /><p>'+(data[85]*100).toFixed(2)+'%;</p>';
      let pol08 = bsize+data[86]*100+'%;'+typeoflist+'" /><p>'+(data[86]*100).toFixed(2)+'%;</p>';

      let eco07 = bsize+data[87]*100+'%;'+typeoflist+'" /><p>'+(data[87]*100).toFixed(2)+'%;</p>';
      let edu07 = bsize+data[88]*100+'%;'+typeoflist+'" /><p>'+(data[88]*100).toFixed(2)+'%;</p>';
      let heal07 = bsize+data[89]*100+'%;'+typeoflist+'" /><p>'+(data[89]*100).toFixed(2)+'%;</p>';
      let pol07 = bsize+data[90]*100+'%;'+typeoflist+'" /><p>'+(data[90]*100).toFixed(2)+'%;</p>';

      let eco06 = bsize+data[91]*100+'%;'+typeoflist+'" /><p>'+(data[91]*100).toFixed(2)+'%;</p>';
      let edu06 = bsize+data[92]*100+'%;'+typeoflist+'" /><p>'+(data[92]*100).toFixed(2)+'%;</p>';
      let heal06 = bsize+data[93]*100+'%;'+typeoflist+'" /><p>'+(data[93]*100).toFixed(2)+'%;</p>';
      let pol06 = bsize+data[94]*100+'%;'+typeoflist+'" /><p>'+(data[94]*100).toFixed(2)+'%;</p>';

      let eco = prediv+'"eco"';
      let edu = prediv+'"edu"';
      let pol = prediv+'"pol"';
      let heal = prediv+'"heal"';
      let star = prediv+'"star">';

      // `<div data-index=${aaa}>`

      let info21 = star+eco+eco21+'</div>'+edu+edu21+'</div>'+pol+pol21+'</div>'+heal+heal21+'</div></div>';
      let info20 = star+eco+eco20+'</div>'+edu+edu20+'</div>'+pol+pol20+'</div>'+heal+heal20+'</div></div>';
      let info18 = star+eco+eco18+'</div>'+edu+edu18+'</div>'+pol+pol18+'</div>'+heal+heal18+'</div></div>';
      let info17 = star+eco+eco17+'</div>'+edu+edu17+'</div>'+pol+pol17+'</div>'+heal+heal17+'</div></div>';
      let info16 = star+eco+eco16+'</div>'+edu+edu16+'</div>'+pol+pol16+'</div>'+heal+heal16+'</div></div>';
      let info15 = star+eco+eco15+'</div>'+edu+edu15+'</div>'+pol+pol15+'</div>'+heal+heal15+'</div></div>';
      let info14 = star+eco+eco14+'</div>'+edu+edu14+'</div>'+pol+pol14+'</div>'+heal+heal14+'</div></div>';
      let info13 = star+eco+eco13+'</div>'+edu+edu13+'</div>'+pol+pol13+'</div>'+heal+heal13+'</div></div>';
      let info12 = star+eco+eco12+'</div>'+edu+edu12+'</div>'+pol+pol12+'</div>'+heal+heal12+'</div></div>';
      let info11 = star+eco+eco11+'</div>'+edu+edu11+'</div>'+pol+pol11+'</div>'+heal+heal11+'</div></div>';
      let info10 = star+eco+eco10+'</div>'+edu+edu10+'</div>'+pol+pol10+'</div>'+heal+heal10+'</div></div>';
      let info09 = star+eco+eco09+'</div>'+edu+edu09+'</div>'+pol+pol09+'</div>'+heal+heal09+'</div></div>';
      let info08 = star+eco+eco08+'</div>'+edu+edu08+'</div>'+pol+pol08+'</div>'+heal+heal08+'</div></div>';
      let info07 = star+eco+eco07+'</div>'+edu+edu07+'</div>'+pol+pol07+'</div>'+heal+heal07+'</div></div>';
      let info06 = star+eco+eco06+'</div>'+edu+edu06+'</div>'+pol+pol06+'</div>'+heal+heal06+'</div></div>';

      let stars06 = prediv + '"info star06">' + info06 +'<h2>2006</h2></div>',
          stars07 = prediv + '"info star07">' + info07 +'<h2>2007</h2></div>',
          stars08 = prediv + '"info star08">' + info08 +'<h2>2008</h2></div>',
          stars09 = prediv + '"info star09">' + info09 +'<h2>2009</h2></div>',
          stars10 = prediv + '"info star10">' + info10 +'<h2>2010</h2></div>',
          stars11 = prediv + '"info star11">' + info11 +'<h2>2011</h2></div>',
          stars12 = prediv + '"info star12">' + info12 +'<h2>2012</h2></div>',
          stars13 = prediv + '"info star13">' + info13 +'<h2>2013</h2></div>',
          stars14 = prediv + '"info star14">' + info14 +'<h2>2014</h2></div>',
          stars15 = prediv + '"info star15">' + info15 +'<h2>2015</h2></div>',
          stars16 = prediv + '"info star16">' + info16 +'<h2>2016</h2></div>',
          stars17 = prediv + '"info star17">' + info17 +'<h2>2017</h2></div>',
          stars18 = prediv + '"info star18">' + info18 +'<h2>2018</h2></div>',
          stars20 = prediv + '"info star20">' + info20 +'<h2>2020</h2></div>',
          stars21 = prediv + '"info star21">' + info21 +'<h2>2021</h2></div>',
          allstars = prediv + '"allstars hidden closed">' + stars06 + stars07 + stars08 + stars09 + stars10 + stars11 + stars12 + stars13 + stars14 + stars15+ stars16 + stars17 + stars18 + stars20 + stars21 +'</div>';

      //сбор визуализации
      let legend = prediv+'"legend">'+'</div>';
      let dataviz = $(prediv+'"years">').html(allstars+prediv+'"card">'+prediv+'"mainlist"'+prop6+prediv+'"mainlist"'+prop7+prediv+'"mainlist"'+prop8+prediv+'"mainlist"'+prop9+prediv+'"mainlist"'+prop10+prediv+'"mainlist"'+prop11+prediv+'"mainlist"'+prop12+prediv+'"mainlist"'+prop13+prediv+'"mainlist"'+prop14+prediv+'"mainlist"'+prop15+prediv+'"mainlist"'+prop16+prediv+'"mainlist"'+prop17+prediv+'"mainlist"'+prop18+prediv+'"mainlist"'+prop20+prediv+'"mainlist list2021"'+prop21+prediv+'"country"/><h1>'+data[0]+'</h1></div></div>');

      // вывод карточек
      let coin = 0;
      let check = parseInt(mblock.length) >= 1;
      if (coin == 0) {
          mainblock.append(dataviz);
          console.log(coin);
        console.log(check);
      }

    $('.mainlist').click(function(){
      $('body').addClass('overflow');
      $('.blocker.hidden, .allstars.hidden, .smlegend').removeClass('closed');
      $('.block, .header').addClass('hidden closed');

      $(this).parent().addClass('menu');
      $(this).parent().parent().addClass('all');
      setTimeout(function(){
        $('.blocker, .smlegend, .allstars').removeClass('hidden');
      }, 50);
      $('.blocker').prepend($('.all'));
      $('.blocker').prepend($('.legend'));
      $('.legend').prepend($('.menu, .smlegend'));
    });
    $('.cross').click(function (){
      $('body').removeClass('overflow')
      setTimeout(function(){
        $('.menu').remove();
        $('.years.all').remove();
      }, 600);
      setTimeout(function(){
        $('.blocker, .smlegend, .allstars').addClass('closed');
        $('.block, .header').removeClass('closed');
      }, 800);
      setTimeout(function(){
        $('.blocker, .allstars').addClass('hidden');
        $('.block, .header').removeClass('hidden');
      }, 100);
    });
  }
  }
