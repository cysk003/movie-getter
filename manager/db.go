package manager

import (
	"movie/db"
	"movie/getter"
)

func (here *Manager) GetSource() ([]Source, error) {
	sources := []Source{}
	v, err := here.db.AllSource()
	for _, v := range v {
		sources = append(sources, Source{
			ID:   v.ID,
			Name: v.Name,
			Url:  v.Url,
			Ok:   v.Ok,
			Pg:   v.Pg,
		})
	}
	return sources, err
}

// 增加采集源
func (here *Manager) AddSource(name string, url string) bool {
	id, ok := here.db.AddSource(name, url)
	if !ok {
		return ok
	}
	here.getters[id] = getter.NewGetter(id, name, url, false, 1)
	return ok
}

// 删除采集源
func (here *Manager) DelSource(id uint) error {
	return here.db.DelSource(id)
}

func handleContents(contents []db.Content) []Movie {
	movies := []Movie{}
	for _, content := range contents {
		movies = append(movies, Movie{
			Id:          int(content.ID),
			Name:        content.Name,
			Pic:         content.Pic,
			Actor:       content.Actor,
			Director:    content.Director,
			Duration:    content.Duration,
			Description: content.Description,
			Url:         content.Url,
		})
	}
	return movies
}

// 前台接口，搜索所有影片
func (here *Manager) SearchContent(keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent(keyword, num, pg)
	movies := []Movie{}
	for _, content := range contents {
		movies = append(movies, Movie{
			Id:          int(content.ID),
			Name:        content.Name,
			Pic:         content.Pic,
			Actor:       content.Actor,
			Director:    content.Director,
			Duration:    content.Duration,
			Description: content.Description,
		})
	}
	return movies, pgCount, err
}

// 后台接口，全局搜索影片
func (here *Manager) SearchContent_bk(keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent(keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，搜索自建分类下影片
func (here *Manager) SearchContent_bk_Category(categoryId uint, keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Category(categoryId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，搜索采集类下影片
func (here *Manager) SearchContent_bk_Class(classId uint, keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Class(classId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，根据采集源搜索影片
func (here *Manager) SearchContent_bk_Source(sourceId uint, keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Source(sourceId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，所有影片列表
func (here *Manager) ContentList(num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList(num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，自建分类影片列表
func (here *Manager) ContentList_Category(categoryId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Category(categoryId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，采集类影片列表
func (here *Manager) ContentList_Class(classId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Class(classId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，采集源影片列表
func (here *Manager) ContentList_Source(sourceId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Source(sourceId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 获取影片详细信息
func (here *Manager) GetContent(id uint) (Movie, error) {
	content, err := here.db.GetContent(id)
	movie := Movie{
		Id:          int(content.ID),
		Name:        content.Name,
		Pic:         content.Pic,
		Actor:       content.Actor,
		Director:    content.Director,
		Duration:    content.Duration,
		Description: content.Description,
		Url:         content.Url,
	}
	return movie, err
}

// 更新采集源名字
func (here *Manager) UpdateSourceName(oldName string, newName string) error {
	return here.db.UpdateSourceName(oldName, newName)
}

// 更新采集源地址
func (here *Manager) UpdateSourceUrl(oldUrl string, newUrl string) error {
	return here.db.UpdateSourceUrl(oldUrl, newUrl)
}

// 增加自定义分类
func (here *Manager) AddCategory(name string) bool {
	_, ok := here.db.AddCategory(name)
	return ok == nil
}

// 获取所有分类
func (here *Manager) GetCategory() ([]db.Category, error) {
	return here.db.AllCategory()
}

// 删除分类
func (here *Manager) DelCategory(id uint) error {
	return here.db.DelCategory(id)
}

// 更新分类
func (here *Manager) UpdateCategory(oldName string, newName string) error {
	return here.db.UpdateCategoryName(oldName, newName)
}

// 获取分类下影片
func (here *Manager) BrowseContentByCategory(categoryId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.BrowseContentByCategory(categoryId, num, pg)

	movies := []Movie{}

	for _, content := range contents {
		movies = append(movies, Movie{
			Id:          int(content.ID),
			Name:        content.Name,
			Pic:         content.Pic,
			Actor:       content.Actor,
			Director:    content.Director,
			Duration:    content.Duration,
			Description: content.Description,
		})
	}

	return movies, pgCount, err
}

func (here *Manager) GetClass(sourceId uint) ([]Class, error) {
	v, err := here.db.GetClass(sourceId)
	classes := []Class{}
	for _, v := range v {
		classes = append(classes, Class{
			ID:   v.ID,
			Name: v.Name,
			// ClassId: v.ClassId,
			Get: v.Get,
		})
	}
	return classes, err
}

// 分配采集类
func (here *Manager) DistributeClass(classId uint, categoryId uint) error {
	return here.db.DistributeClass(classId, categoryId)
}

// 更改采集类是否允许采集
func (here *Manager) ChangeClassGet(classId uint, get bool) error {
	return here.db.ChangeClassGet(classId, get)
}

// 登录函数
func (here *Manager) Login(account string, password string) bool {
	return here.db.Login(account, password)
}

type Source struct {
	ID   uint   `json:"id"`
	Name string `json:"name"`
	Url  string `json:"url"`
	Ok   bool   `json:"ok"`
	Pg   int    `json:"pg"`
}

type Movie struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Pic         string `json:"pic"`
	Actor       string `json:"actor"`
	Director    string `json:"director"`
	Duration    string `json:"duration"`
	Description string `json:"description"`
	Url         string `json:"url,omitempty"`
}

type Class struct {
	ID   uint
	Name string // 采集分类名
	// ClassId int    // 采集分类id
	Get bool // 是否采集
}
