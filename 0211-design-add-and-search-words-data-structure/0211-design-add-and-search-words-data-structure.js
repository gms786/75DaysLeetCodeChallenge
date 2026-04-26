var WordDictionary = function() {
    this.root = {};
};

/** Adds a word into the data structure */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    
    for (let ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    
    node.isEnd = true;
};

/** Search word with '.' support */
WordDictionary.prototype.search = function(word) {
    
    const dfs = (node, i) => {
        if (i === word.length) {
            return node.isEnd === true;
        }
        
        let ch = word[i];
        
        // Case 1: normal character
        if (ch !== '.') {
            if (!node[ch]) return false;
            return dfs(node[ch], i + 1);
        }
        
        // Case 2: dot → try all possibilities
        for (let key in node) {
            if (key !== "isEnd" && dfs(node[key], i + 1)) {
                return true;
            }
        }
        
        return false;
    };
    
    return dfs(this.root, 0);
};
