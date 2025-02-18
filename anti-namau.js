document.querySelectorAll("li").forEach(li => {
    let content = li.innerHTML;
    content = content.slice(0, content.lastIndexOf("-")); //日付を除去する
    content = content.split(" ").join("").split("\n").join(""); // スペース、改行を除去する
    const isEvil = content.length == 7 && content.split("").sort().join("") == "うぢぢつつなま"; // 消すべきか判定

    // 本当に削除するべき「なまうつぢつぢ」のシャッフルは削除する
    if (isEvil)
        li.remove();
    else {
        // それ以外はエスケープして保護
        // 「ま」「う」「つ」だけエスケープすればよさそうだけどねんのため
        li.innerHTML = li.innerHTML
            .split("$").join("$0")
            .split("な").join("$1")
            .split("ま").join("$2")
            .split("う").join("$3")
            .split("つ").join("$4")
            .split("ぢ").join("$5");
    }
});

// DOMContentLoadedは追加した順に実行される
document.addEventListener("DOMContentLoaded", () => {
    // エスケープの復元
    document.querySelectorAll("li").forEach(li => {
        li.innerHTML = li.innerHTML
            .split("$1").join("な")
            .split("$2").join("ま")
            .split("$3").join("う")
            .split("$4").join("つ")
            .split("$5").join("ぢ")
            .split("$0").join("$")
    });
});