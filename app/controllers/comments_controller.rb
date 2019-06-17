def create
    @comment = Comment.create(text: comment_params[:text], group_id: comment_params[:group_id], user_id: current_user.id)
    respond_to do |format|
      format.html { redirect_to tweet_path(params[:group_id])  }
      format.json
    end
  end

  private
  def comment_params
    params.permit(:text, :group_id)
  end